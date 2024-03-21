import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import NextTopLoader from "nextjs-toploader";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hack-IU",
  description: "Platform for the HIU hacking challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
         <NextTopLoader color="#000" showSpinner={false}/>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
