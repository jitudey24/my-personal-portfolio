import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Jitu Dey | Fresher Web Developer",
  description: "Portfolio of Jitu Dey, a fresher web developer from Bangladesh focused on JavaScript, TypeScript, React, Next.js, and responsive web development.",
  metadataBase: new URL("https://github.com/jitudey24"),
  openGraph: {
    title: "Jitu Dey | Fresher Web Developer",
    description: "Explore projects and skills by Jitu Dey, a fresher web developer from Bangladesh.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body  cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
