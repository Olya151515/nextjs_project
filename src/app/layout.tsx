import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import styles from "/src/app/page.module.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
type PropType = { children: React.ReactNode };
export default function RootLayout({children}: Readonly<PropType>) {
  return (
      <html lang="en">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink&family=Quicksand:wght@300..700&display=swap"
              rel="stylesheet"/>
      </head>
      <body className={styles.body}>
      <HeaderComponent/>
      {children}
      </body>
      </html>
  );
}
