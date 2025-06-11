import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <Image src="/next.svg" width={50} height={50} alt="logo"/>
            </div>
            <Link href="/">หน้าเเรก</Link>||
            <Link href="/about">เกี่ยวกับเรา</Link>||
            <Link href="/products">สินค้าทั้งหมด</Link>
        </nav>
    )
}