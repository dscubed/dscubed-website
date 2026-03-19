"use server";
import { createClient } from "@/utils/supabase/server";

export async function fetchEventCount() {
  const supabase = await createClient();

  try {
    const { count, error } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true });

    if (error) {
      throw error;
    }

    return count;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch event count.");
  }
}

export async function fetchEvents(range: [number, number] = [0, 4]) {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: false })
      .order("created_at", { ascending: false })
      .range(...range);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events.");
  }
}

export async function fetchEvent(id: number) {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch event.");
  }
}

export async function fetchThumbnail(path: string) {
  const supabase = await createClient();
  const { data } = await supabase.storage.from("thumbnails").getPublicUrl(path);

  return data;
}

export async function fetchMostRecentEventUpdatedAt() {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("events")
      .select("updated_at")
      .order("updated_at", { ascending: false })
      .limit(1);

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch most recent event's updated_at field.");
  }
}
