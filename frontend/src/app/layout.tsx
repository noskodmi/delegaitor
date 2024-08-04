import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Layout } from "@/components";

const inter = Inter({ subsets: ["latin"] });
// const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delegaitor",
  applicationName: "Delegaitor",
  description: "Symbiosis of Human and AI for enhanced and active DAO voting. Choose strategy and delegate your voting power to AI agents",
  authors: {
    name: "noskodmi",
    url: "https://github.com/noskodmi/delegaitor",
  },
  icons: "favicon.ico",
  manifest: "site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
