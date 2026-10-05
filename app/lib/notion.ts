"use server";

// Events are managed in a Notion database. Only rows with Status = Published
// are shown on the site. Property names below must match the Notion columns exactly.

type NotionFile = {
  type: "file" | "external";
  file?: { url: string };
  external?: { url: string };
};

type NotionRow = {
  last_edited_time: string;
  properties: {
    Name?: { title: { plain_text: string }[] };
    Description?: { rich_text: { plain_text: string }[] };
    "Event Image"?: { files: NotionFile[] };
    Date?: { date: { start: string } | null };
    "Link (instagram)"?: { url: string | null };
  };
};

async function queryPublishedEvents(): Promise<NotionRow[]> {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_EVENTS_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Status", select: { equals: "Published" } },
        sorts: [{ property: "Date", direction: "descending" }],
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Notion API error ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  return data.results;
}

function toEvent(row: NotionRow) {
  const props = row.properties;
  const image = props["Event Image"]?.files[0];

  return {
    title: props.Name?.title[0]?.plain_text ?? "",
    description: props.Description?.rich_text[0]?.plain_text ?? "",
    // Uploaded files expire after ~1 hour; pasted links do not
    thumbnail: image?.file?.url ?? image?.external?.url ?? "",
    date: props.Date?.date?.start ?? "",
    link: props["Link (instagram)"]?.url ?? "#",
  };
}

export async function fetchEventCount() {
  try {
    const rows = await queryPublishedEvents();
    return rows.length;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch event count.");
  }
}

export async function fetchEvents(range: [number, number] = [0, 4]) {
  try {
    const rows = await queryPublishedEvents();
    // range is inclusive (Supabase style), slice's end is exclusive
    return rows.slice(range[0], range[1] + 1).map(toEvent);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events.");
  }
}

export async function fetchMostRecentEventUpdatedAt() {
  try {
    const rows = await queryPublishedEvents();
    const latest = rows
      .map((row) => row.last_edited_time)
      .sort()
      .at(-1);

    return latest ? { updated_at: latest } : undefined;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch most recent event's updated_at field.");
  }
}
