import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'CNedu | Trang chủ',
}

export default function Home() {
  return (
    <div className="pt-[60px]">
      <div className="mt-[40px] text-center">
        <Link href={"/admin/dashboard"} className="mx-[10px] bg-[#FF883E] text-white font-bold px-[15px] py-[10px] rounded-[5px]">Tổng quan</Link>
      </div>
      <h1 className="
        mx-[20px]
        mt-[20px]
        text-center
        text-[40px]
        font-bold
        text-[#FF883E]"
      >
        CNedu - Hệ thống giáo dục toàn diện được phát triển bởi Lý Cao Nguyên
      </h1>
      <p className="text-center">Đang được phát triển bởi <strong>Lý Cao Nguyên</strong></p>
    </div>
  );
}
