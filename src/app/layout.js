// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";

const arialRounded = localFont({
  src: "./fonts/ArialRounded.ttf",
  variable: "--font-arial-rounded",
});
const arialRoundedBold = localFont({
  src: "./fonts/ArialRoundedBold.ttf",
  variable: "--font-arial-rounded-bold",
});

export const metadata = {
  title: "Zeyu Yao",
  description:
    "I build projects in @hackclub and @aimed-lab! prev. @buildingblocs @saishackclub @geekcampsg. I'm a student in Singapore.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cytronicoder.com",
    title: "Zeyu Yao",
    description:
      "I build projects in @hackclub and @aimed-lab! prev. @buildingblocs @saishackclub @geekcampsg. I'm a student in Singapore.",
    siteName: "Zeyu Yao",
    images: [
      {
        url: "https://cytronicoder.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeyu Yao",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeyu Yao",
    description:
      "I build projects in @hackclub and @aimed-lab! prev. @buildingblocs @saishackclub @geekcampsg. I'm a student in Singapore.",
    creator: "@cytronicoder",
    images: ["https://cytronicoder.com/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arialRounded.variable} ${arialRoundedBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
