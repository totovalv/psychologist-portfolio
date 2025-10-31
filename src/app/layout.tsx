import "./globals.css";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Jane Doe | Psychologist",
  description:
    "Evidence-based psychotherapy for anxiety, depression, and life transitions. In-person & online sessions.",
  openGraph: {
    title: "Dr. Jane Doe | Psychologist",
    description:
      "Evidence-based psychotherapy for anxiety, depression, and life transitions.",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased bg-white text-stone-800`}>
        {children}
      </body>
    </html>
  );
}
