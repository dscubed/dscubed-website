import committeePhoto from "@/public/people/committee2026.png";
import {
  executives,
  directors,
  teams,
  committeeData2026,
} from "@/app/components/committee/data/memberData2026";
import { CommitteePageContent } from "@/app/components/committee/CommitteePageContent";

export const metadata = {
  title: "Committee | DSCubed",
  description:
    "Meet the team behind DSCubed. Introducing our committee for 2026.",
  openGraph: {
    title: "Committee | DSCubed",
    description:
      "Meet the team behind DSCubed. Introducing our committee for 2026.",
    url: "/committee",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Committee | DSCubed",
    description:
      "Meet the team behind DSCubed. Introducing our committee for 2026.",
  },
};

export default function CommitteePage() {
  return <CommitteePageContent committeeData={committeeData2026} />;
}
