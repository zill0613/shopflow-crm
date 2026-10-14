import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopFlow CRM",
  description: "Customer relationship management for WooCommerce stores"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
