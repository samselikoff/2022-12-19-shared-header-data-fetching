import "./globals.css";
import Header from "./header";
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-gray-900">
        <Header />
        <main className="px-2 py-6">{children}</main>
      </body>
    </html>
  );
}
