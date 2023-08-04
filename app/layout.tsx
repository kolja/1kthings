import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from './Menu'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '1000 things',
    description: 'keep track of your 1000 things',
}

export default function RootLayout({
    children,
}: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>
                    <Menu />
                    {children}
                </main>
            </body>
        </html>
    )
}
