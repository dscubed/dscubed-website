import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committee | DSCubed",
  description:
    "Meet the DSCubed committee members. View our executives, directors, and teams across different years. Learn more about the people behind The Data Science Student Society at University of Melbourne.",
  keywords: [
    "DSCubed",
    "committee",
    "executives",
    "directors",
    "team",
    "UNSW",
    "data science",
  ],
  alternates: {
    canonical: "https://dscubed.org.au/committee",
  },
  openGraph: {
    title: "Committee | DSCubed",
    description:
      "Meet the DSCubed committee members across all teams and years.",
    url: "https://dscubed.org.au/committee",
    siteName: "DSCubed",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://dscubed.org.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "DSCubed Committee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Committee | DSCubed",
    description:
      "Meet the DSCubed committee members. View our executives, directors, and teams.",
    images: ["https://dscubed.org.au/og-image.png"],
  },
};

export default function CommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
