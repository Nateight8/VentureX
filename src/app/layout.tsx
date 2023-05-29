import Navbar from "../../components/header/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const custom = localFont({
  src: "../../public/fonts/apple/SF-Compact-Display-Regular.otf",
  // variable: "--heading",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={custom.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
