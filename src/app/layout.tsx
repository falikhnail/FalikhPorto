import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Falikh Rifqi Nail - Web Developer & Full Stack Developer',
  description: 'Portfolio of Falikh Rifqi Nail - Professional Web Developer & Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.',
  keywords: ['Falikh Rifqi Nail', 'Web Developer', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript'],
  authors: [{ name: 'Falikh Rifqi Nail' }],
  openGraph: {
    title: 'Falikh Rifqi Nail - Portfolio',
    description: 'Professional Web Developer & Full Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}