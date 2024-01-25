import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const colors = {
  background: "#0d0c22",
  bgSoft: "#2d2b42",
  soft: "#e5e5e5",
  btn: "#3673fd",
};

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-[#e5e5e5] bg-[#0d0c22]">
        <div className="w-4/5 mx-auto md:px-8 min-h-screen flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
