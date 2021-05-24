import '@/styles/globals.css'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Chiefpansancolt is a avid gamer, devoted father and husband, a developer changing the world one line of code at a time!"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {router.pathname !== '/' && <Navigation />}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
