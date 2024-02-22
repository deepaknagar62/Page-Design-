import Image from 'next/image';
import styles from "./css/Button.module.css";

export default function Button(props) {
  return (
    <div className={styles.right_header_btn}>
              {props.Name}
    </div>
  )
}
