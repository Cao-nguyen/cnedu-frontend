import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import logo from "../../public/logo.png"
import Image from 'next/image'
import '../globals.css'

const inter = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CNedu',
  description: 'CNedu - Hệ thống giáo dục toàn diện hỗ trợ cho học sinh nhiều cấp học. Học là mê, chơi cũng học cùng CNedu',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-[100%] h-[60px] bg-[#282a36] fixed top-0">
          <Image className="ml-[20px] w-[60px]" src={logo} alt="" />
        </header>
        {children}
      </body>
    </html >
  )
}
