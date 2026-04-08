import { committeeData2025 } from "@/app/components/committee/data/memberData2025";
import { CommitteePageContent } from "@/app/components/committee/CommitteePageContent";

export const metadata = {
  title: "Committee | DSCubed",
  description:
    "Meet the team behind DSCubed. Introducing our committee for 2025.",
  openGraph: {
    title: "Committee | DSCubed",
    description:
      "Meet the team behind DSCubed. Introducing our committee for 2025.",
    url: "/committee",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Committee | DSCubed",
    description:
      "Meet the team behind DSCubed. Introducing our committee for 2025.",
  },
};

export default function CommitteePage() {
  return <CommitteePageContent committeeData={committeeData2025} />;
}
