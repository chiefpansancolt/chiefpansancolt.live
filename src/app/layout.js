import { Inter } from 'next/font/google'
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import "@/styles/globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chiefpansancolt: A Gamer, Father, Husband, and Developer',
  description: 'Chiefpansancolt is a avid gamer, devoted father and husband, a developer changing the world one line of code at a time!',
  keywords: 'Chiefpansancolt, Chief, Streamer, Developer, Gamer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
            }}
          />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
