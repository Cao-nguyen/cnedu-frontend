// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex gap-[20px] w-full h-[60px] bg-[#282a36] fixed top-0 items-center">
            <Link href="/">
                <Image className="ml-[20px] w-[60px]" src={logo} alt="logo" />
            </Link>
            <Link
                href="/"
                className={`font-bold px-[10px] py-[5px] rounded-[5px] ${pathname === '/'
                    ? 'bg-[#FF883E] font-bold text-white'
                    : 'text-white hover:bg-[#44475a]'
                    }`}
            >
                Trang chủ
            </Link>
            <Link
                href="/admin/dashboard"
                className={`font-bold px-[10px] py-[5px] rounded-[5px] ${pathname === '/admin/dashboard'
                    ? 'bg-[#FF883E] text-white'
                    : 'text-white hover:bg-[#44475a]'
                    }`}
            >
                Giới thiệu
            </Link>
        </header>
    );
}