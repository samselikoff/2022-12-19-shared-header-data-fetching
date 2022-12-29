import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);

  return (
    <>
      <Header user={pageProps.user} />

      <main className="px-4 py-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}
