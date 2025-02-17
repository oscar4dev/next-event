import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import ScrollToTop from "./ui/ScrollToTop";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700']
});


export const metadata = {
  title: {
    template: '%s | Next Event',
    default: 'Next Event',
  },
  description: "The Next Event app built with App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <header className="fixed w-full z-10">
          <Header />
        </header>

        <main className="min-h-dvh pt-16">
          {children}
        </main>

        <footer className="w-full">
          <Footer />
        </footer>

        <div className="fixed bottom-5 right-4 z-10">
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
