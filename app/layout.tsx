import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.raulcubilaperez.com'),
  title: 'Raul Cubila Perez | Software Engineer',
  description: 'Software Engineer specializing in Java, Spring Boot, React, Next.js, TypeScript and modern full-stack application development.',
  generator: 'Next.js',
  openGraph: {
    title: 'Raul Cubila Perez | Software Engineer',
    description: 'Software Engineer specializing in Java, Spring Boot, React, Next.js, TypeScript and modern full-stack application development.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#17245A',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
