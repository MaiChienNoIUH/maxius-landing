export const metadata = {
  title: "Maxius — Modern AI Landing",
  description: "A modern, minimal and startup-friendly landing page.",
  icons: { icon: "/favicon.ico" },
};

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
