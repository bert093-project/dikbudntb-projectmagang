import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dikpora NTB",
  description: "Dinas Pendidikan dan Kebudayaan NTB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
