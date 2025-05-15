// src/components/Footer.tsx
'use client';

import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';

import { LogoFacebook } from 'react-ionicons';

export default function Footer() {

    return (
        <footer className="py-[20px] mt-[20px] w-full bg-footer items-center">
            <div className="mx-[20px] flex items-center">
                <Image className="ml-[20px] w-[100px] mr-[20px]" src={logo} alt="logo" />
                <h3 className="text-white font-bold text-[20px]">CNedu - Nền tảng giáo dục toàn diện</h3>
            </div>
            <div className="flex items-center my-[20px] w-[95%] h-px bg-white/10 mx-auto"></div>

            <div className="mx-[40px] flex justify-between">
                <div className="flex gap-[20px]">
                    <Link className="text-white" href="/dieu-khoan">Điều khoản sử dụng</Link>
                    <div className="h-[30px] bg-white/10 w-[1px]"></div>
                    <Link className="text-white" href="/dieu-khoan">An toàn & bảo mật</Link>
                </div>
                <div className="flex gap-[20px]">
                    <p className="text-white uppercase">theo dõi chúng tôi</p>
                    <div className="h-[30px] bg-white/10 w-[1px]"></div>
                    <Link href="https://www.facebook.com/cnedu.com.vn">
                        <LogoFacebook color="#FFF" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}