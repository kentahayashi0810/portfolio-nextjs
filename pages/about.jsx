import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenta Hayashi | About</title>
      </Head>
      <Header />
      <About />
      <Contact />
    </>
  );
}
