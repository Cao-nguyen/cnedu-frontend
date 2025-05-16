// src/components/Footer.tsx
'use client';

import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';

import { CallSharp, LogoFacebook, LogoTiktok, LogoYoutube, MailSharp, PersonCircleSharp } from 'react-ionicons';

export default function Footer() {

    return (
        <footer className="py-[20px] mt-[20px] w-full bg-footer items-center">
            <div className="mx-[20px] flex items-center">
                <Image className="ml-[20px] w-[100px] mr-[20px]" src={logo} alt="logo" />
                <h3 className="text-white font-bold text-[20px]">CNedu - Nền tảng giáo dục toàn diện</h3>
            </div>

            <div className="flex items-center my-[20px] w-[95%] h-[0.5px] bg-white/10 mx-auto"></div>

            <div className="mx-[40px] flex gap-[20px]">
                <div className="w-[10%]">
                    <h3 className="text-[18px] text-white font-bold">Học sinh</h3>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng lớp 6</Link>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng lớp 7</Link>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng lớp 8</Link>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng lớp 9</Link>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng lớp 10</Link>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng lớp 11</Link>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng lớp 12</Link>
                </div>
                <div className="w-[10%]">
                    <h3 className="text-[18px] text-white font-bold">Giáo viên</h3>
                    <Link className="block text-white text-[16px]" href={""}>Giáo án</Link>
                    <Link className="block text-white text-[16px]" href={""}>Bài giảng điện tử</Link>

                </div>
                <div className="w-[12%]">
                    <h3 className="text-[18px] text-white font-bold">Liên kết nhanh</h3>
                </div>
                <div className="w-[25%]">
                    <h3 className="text-[18px] text-white font-bold">Hỗ trợ</h3>
                    <div className="flex justify-between mt-[10px]">
                        <div className="rounded-[5px] bg-main p-[5px] flex items-center gap-[8px]">
                            <CallSharp color={"#FFF"} />
                            <p className="text-white font-bold">0394217863</p>
                        </div>
                        <div className="rounded-[5px] bg-main p-[5px] flex items-center gap-[8px]">
                            <MailSharp color={"#FFF"} />
                            <p className="text-white font-bold">cao343451@gmai.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center my-[20px] w-[95%] h-[0.5px] bg-white/10 mx-auto"></div>

            <div className="mx-[40px] flex justify-between">
                <div className="flex gap-[20px]">
                    <Link className="text-white" href="/dieu-khoan">Điều khoản sử dụng</Link>
                    <div className="h-[30px] bg-white/10 w-[1px]"></div>
                    <Link className="text-white" href="/dieu-khoan">An toàn & bảo mật</Link>
                </div>
                <div className="flex gap-[20px]">
                    <p className="text-white uppercase">theo dõi chúng tôi</p>
                    <div className="h-[30px] bg-white/10 w-[1px]"></div>
                    <Link href="https:/zalo.me/0394217863">
                        <CallSharp color="#FFF" />
                    </Link>
                    <Link href="https://www.facebook.com/cnedu.com.vn">
                        <LogoFacebook color="#FFF" />
                    </Link>
                    <Link href="https://www.youtube.com/@CNedu-edu-vn">
                        <LogoYoutube color="#FFF" />
                    </Link>
                    <Link href="https://www.tiktok.com/@cngroup.edu.vn">
                        <LogoTiktok color="#FFF" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}