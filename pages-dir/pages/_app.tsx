import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header name={pageProps.user.name} />

      <main className="px-4 py-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}
