import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dbos.in"),
  title: {
    default: "DBOS – Dihing Board of Open Schooling",
    template: "%s | DBOS",
  },
  description:
    "Dihing Board of Open Schooling (DBOS) provides flexible Secondary and Senior Secondary education. Empowering learners through accessible open schooling in India.",
  keywords: [
    "DBOS",
    "Dihing Board of Open Schooling",
    "Open Schooling",
    "Distance Education",
    "Secondary Education",
    "Senior Secondary",
    "NIOS Alternative",
    "Private Examination",
    "Assam Open School",
    "Education Board",
  ],
  authors: [{ name: "Dihing Board of Open Schooling" }],
  creator: "DBOS",
  publisher: "DBOS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dbos.in",
    title: "DBOS – Dihing Board of Open Schooling",
    description:
      "Join Dihing Board of Open Schooling for flexible 10th and 12th grade education. Valid for higher studies and government jobs.",
    siteName: "Dihing Board of Open Schooling",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "DBOS - Dihing Board of Open Schooling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DBOS – Dihing Board of Open Schooling",
    description:
      "Flexible Secondary and Senior Secondary education for everyone. Join DBOS today.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
