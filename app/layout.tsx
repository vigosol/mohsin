import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"], 
});
export const metadata: Metadata = {
  title: "Mohsin Ali",
  description: "Mohsin Ali",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
