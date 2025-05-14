import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'CNedu | Trang tổng quan',
}

export default function Dashboard() {
    return (
        <div className="mt-[60px]">
            <div className="pt-[40px] text-center">
                <Link href={"/"} className="mx-[10px] bg-[#FF883E] text-white font-bold px-[15px] py-[10px] rounded-[5px]">Trở về trang chủ</Link>
            </div>

            <h1 className="pt-[30px] text-center text-[50px] font-bold text-[#FF883E]">Tổng quan</h1>
        </div>
    )
}