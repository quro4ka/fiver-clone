import { AiOutlineTwitter } from "react-icons/ai";
import {BsFacebook} from 'react-icons/bs'
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>Fiverr</h2>
            <p className={styles.copyright}>© Fiverr International Ltd. 2023</p>
          </div>
          <div className={styles.right}>
            <AiOutlineTwitter className={styles.socialIcon}/>
            <BsFacebook className={styles.socialIcon}/>
          </div>
        </div>
      </div>
    </div>
  );
};
