import Image from 'next/image';
import styles from "./css/Header.module.css";
import chaticon from "../public/chatimg.png"
import Button from './Button';

export default function Header() {
  return (
    <main className={styles.main}>
       <div className={styles.header}>
         <div className={styles.leftheader}>
           <div className={styles.left_header_in}>
            <Image src={chaticon}  className={styles.left_header_img}/>
            <span className={styles.left_header_txt}>Search and Q&A</span>
           </div>
          </div>

          <div className={styles.right_header}>
            <Button Name="Explore"></Button>
           </div>
        
       </div>
    </main>
  )
}
