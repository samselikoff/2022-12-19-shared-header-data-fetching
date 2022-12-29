import "./globals.css";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 text-white antialiased">
        <Header />
        <main className="px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
