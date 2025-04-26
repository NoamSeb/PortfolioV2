import React from "react";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "./globals.scss";
import Cursor from "@/components/cursor/cursor";
import { Analytics } from "@vercel/analytics/react";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// 👇 This is how you set the favicon
export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
