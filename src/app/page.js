import Image from 'next/image';
import styles from "./page.module.css";
import chaticon from "../public/chatimg.png"
import Header from '@/components/Header';
import Button from '@/components/Button';

export default function Home() {
  return (
      <div> 
       <Header></Header>
        
        <div className={styles.main_container}> 
         <div className={styles.main_text_container}> 
          <div className={styles.container_large_text}>
            <span>Empower Your Enterprise with</span> 
            <p >Next-Gen  
            <span style={{color:'#FD843E'}}> Search and Q&A</span></p> 
          </div>
          
          <div className={styles.container_small_text}> 
          <div className={styles.container_small_text2}>
               <span>Introducing Search Companion by
                 <span style={{color:'#FD843F'}}> Primathon</span></span>
          </div>
          </div>
           <div className={styles.container_small_text}>
            <Button Name="Get Started"></Button>
           </div>
          </div>
         </div> 


         

       </div> 
  );
}
