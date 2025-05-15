// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex gap-[15px] w-full h-[65px] bg-header fixed top-0 items-center">
            <Link href="/">
                <Image className="ml-[20px] w-[55px] mr-[20px]" src={logo} alt="logo" />
            </Link>
            <Link
                href="/"
                className={`uppercase font-bold px-[10px] py-[5px] rounded-[5px] ${pathname === '/'
                    ? 'text-main'
                    : 'text-white'
                    }`}
            >
                Trang chủ
            </Link>
            <Link
                href="/admin/dashboard"
                className={`uppercase font-bold px-[10px] py-[5px] rounded-[5px] ${pathname === '/admin/dashboard'
                    ? 'text-main'
                    : 'text-white'
                    }`}
            >
                Giới thiệu
            </Link>
        </header>
    );
}