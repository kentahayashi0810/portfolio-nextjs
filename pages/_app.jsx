import "@/styles/globals.css";
import "@/styles/reset.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <meta
        name="description"
        content="This page is a portfolio of Kenta Hayashi, a front-end developer."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.10.2/css/all.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
