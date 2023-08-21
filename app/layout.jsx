import "./globals.css";
import { League_Spartan } from "next/font/google";
import Navbar from "./(Components)/Navbar";
import Footer from "./(Components)/Footer";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "PocketNote",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spartan.className}>
        <Navbar />
        <section className="p-4 ">{children}</section>

        <Footer />
      </body>
    </html>
  );
}
