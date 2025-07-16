import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nayaab Cattle Farm - Premium Livestock Care & Horse Riding Academy',
  description: 'Premium livestock farm and horse riding academy in the countryside. Expert care for sheep, cows, goats, chickens. Professional horse riding lessons for all ages.',
  keywords: 'cattle farm, livestock, horse riding, academy, sheep, goats, chickens, countryside, Bangalore',
  authors: [{ name: 'Nayaab Cattle Farm' }],
  openGraph: {
    title: 'Nayaab Cattle Farm - Premium Livestock Care & Horse Riding Academy',
    description: 'Premium livestock farm and horse riding academy in the countryside.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}