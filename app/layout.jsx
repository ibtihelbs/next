import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--poppins",
  subsets: ["latin"],
});
export const metadata = {
  title: "e-shop || mobile",
  description: "doffofiueiorueio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Nav />
        <main className="p-8 bg-slate-400">{children}</main>
      </body>
    </html>
  );
}
