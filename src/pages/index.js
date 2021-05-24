import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chiefpansancolt: A Gamer, Father, Husband, and Developer</title>
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  )
}
