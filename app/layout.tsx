import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Muhammad Ikhwan Fitoriqillah - Data Science Portfolio",
  description: "Portfolio Muhammad Ikhwan Fitoriqillah - Data Science Student at PENS. Specializing in Machine Learning, Data Analysis, and UI/UX Design.",
  keywords: ["Muhammad Ikhwan Fitoriqillah", "Data Science", "Machine Learning", "Portfolio", "PENS"],
  authors: [{ name: "Muhammad Ikhwan Fitoriqillah" }],
  openGraph: {
    title: "Muhammad Ikhwan Fitoriqillah - Data Science Portfolio",
    description: "Data Science Student specializing in Machine Learning and Data Analysis",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="antialiased">
        <AnimatedBackground />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
