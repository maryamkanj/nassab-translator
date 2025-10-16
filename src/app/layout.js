import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nassab Translator",
  description: "Certified Public Translator Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <LanguageProvider>
          {/* Header visible on all pages */}
          <Header />

          {/* Main page content */}
          <main className="flex-grow">{children}</main>

          {/* Footer visible on all pages */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
