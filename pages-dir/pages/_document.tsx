import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <body className="bg-gray-900 text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
