import { Inter, Bitter } from "next/font/google";
import Navbar from "@components/Navbar";
import SessionProvider from "@components/Provider"

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medusa Blog",
  description: "Blog, akış ve galeri",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider refetchInterval={5 * 60}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
