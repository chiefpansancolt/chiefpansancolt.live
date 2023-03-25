import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Schedule from "@/components/Schedule"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chiefpansancolt: A Gamer, Father, Husband, and Developer</title>
      </Head>
      <main>
        <Hero />
        <Schedule />
        <Contact />
      </main>
    </div>
  )
}
