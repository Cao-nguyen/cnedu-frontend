import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CNedu | Trang chủ',
}

export default function Home() {
  return (
    <div className="pt-[60px]">
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
