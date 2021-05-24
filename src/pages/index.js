import Head from 'next/head'
import Hero from '@/components/Hero'
import Schedule from '@/components/Schedule'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chiefpansancolt: A Gamer, Father, Husband, and Developer</title>
      </Head>
      <main>
        <Hero />
        <Schedule />
      </main>
    </div>
  )
}
