import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PaperChat',
  description: 'PaperChat is your interactive PDF companion. Engage in a chat-like conversation with your documents. Ask questions, and PaperChat will respond with information and insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-san antialiased grainy',inter.className)}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
