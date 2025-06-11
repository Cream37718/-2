import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าเเรกของเว็บไซต์</h1>
        <Image src="/shopping.jpg" width={300} height={200} alt='logo'/>
        <p>ยินดีต้อนรับเข้าสู่ร้านเด็กชายก้อง</p>
        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
      </div>
    </>
  );
}
