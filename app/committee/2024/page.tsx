import { committeeData2024 } from "@/app/components/committee/data/memberData2024";
import { CommitteePageContent } from "@/app/components/committee/CommitteePageContent";

export const metadata = {
  title: "Past Committee | DSCubed",
  description:
    "Meet the team behind DSCubed. Introducing our past committee for 2024.",
  openGraph: {
    title: "Past Committee | DSCubed",
    description:
      "Meet the team behind DSCubed. Introducing our past committee for 2024.",
    url: "/committee/2024",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Past Committee | DSCubed",
    description:
      "Meet the team behind DSCubed. Introducing our past committee for 2024.",
  },
};

export default function PastCommitteePage() {
  return <CommitteePageContent committeeData={committeeData2024} />;
}
