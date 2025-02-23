import type { Metadata } from 'next'

import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'

import { Header } from '@/src/components/header'
import { Footer } from '@/src/components/footer'
import { Toaster } from '@/src/components/ui/sonner'

import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'McNees Media',
  description: 'Your Home, Smarter and More Entertaining. Serving West and Southwest Michigan.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  )
}
