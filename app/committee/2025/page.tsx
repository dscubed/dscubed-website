import { committeeData2025 } from "@/app/components/committee/data/memberData2025";
import { CommitteePageContent } from "@/app/components/committee/CommitteePageContent";

export const metadata = {
  title: "2025 Committee | DSCubed",
  description:
    "Meet the 2025 DSCubed committee members, including executives, directors, and team leads. View the executives and directors who lead the Data Science Student Society.",
  keywords: [
    "DSCubed 2025",
    "committee",
    "executives",
    "directors",
    "UNSW",
    "data science",
  ],
  alternates: {
    canonical: "https://dscubed.org.au/committee/2025",
  },
  openGraph: {
    title: "2025 Committee | DSCubed",
    description:
      "Meet the 2025 DSCubed committee members and team leads.",
    url: "https://dscubed.org.au/committee/2025",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://dscubed.org.au/people/committee2025.jpg",
        width: 1200,
        height: 630,
        alt: "DSCubed 2025 Committee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 Committee | DSCubed",
    description:
      "Meet the 2025 DSCubed committee members and executives.",
    images: ["https://dscubed.org.au/people/committee2025.jpg"],
  },
  other: {
    "schema:breadcrumbs": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dscubed.org.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Committee",
          item: "https://dscubed.org.au/committee",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "2025",
          item: "https://dscubed.org.au/committee/2025",
        },
      ],
    }),
  },
};

export default function CommitteePage() {
  return <CommitteePageContent committeeData={committeeData2025} />;
}
