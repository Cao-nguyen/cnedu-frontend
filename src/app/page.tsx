import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CNedu | Trang chủ',
}

export default function Home() {
  return (
    <div className="pt-[60px]">
      <h1 className="mt-[20px] text-center text-[34px] font-bold text-[#FF883E]">
        CNedu - Hệ thống giáo dục toàn diện
      </h1>
      <p className="text-center">Đang được phát triển bởi <strong>Lý Cao Nguyên</strong></p>
    </div>
  );
}
