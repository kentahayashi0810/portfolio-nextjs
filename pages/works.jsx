import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { WorksList } from "@/components/WorksList";
import { Contact } from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Works() {
  return (
    <>
      <Head>
        <title>Kenta Hayashi | Works</title>
      </Head>
      <Header />
      <WorksList />
      <Contact />
    </>
  );
}
