// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const arialRounded = localFont({
  src: "./fonts/ArialRounded.ttf",
  variable: "--font-arial-rounded",
});
const arialRoundedBold = localFont({
  src: "./fonts/ArialRoundedBold.ttf",
  variable: "--font-arial-rounded-bold",
});

export const metadata = {
  title: "Your Portfolio",
  description: "High School Bioinformatics Researcher Portfolio",
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
