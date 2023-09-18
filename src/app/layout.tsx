import { ReactNode } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as RobotoFlex,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = RobotoFlex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
