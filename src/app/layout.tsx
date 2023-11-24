import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedestal Education',
 description: 'Pedestal Education is a UPSC coaching center based in Sikkim',
 keywords: 'UPSC, coaching, Sikkim',
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head>
       <link rel="icon" href="/favicon.ico" />
     </Head>
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
