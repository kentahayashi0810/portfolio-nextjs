import { Greeting } from "@/components/Greeting";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Contact } from "@/components/Contact";

export function Main() {
  return (
    <>
      <Greeting />
      <About />
      <Works />
      <Contact />
    </>
  );
}
