import Image from "next/image";
import Link from 'next/link'
import styles from "../Cover/BlogBlock.module.scss";

export default function BlogBlock() {
  return (
    <div className={styles.main}>
      <div className={styles.blogCon}>
        <div className={styles.imgCon}>
          <Image 
          src="/../public/images/read.png" 
          layout="fill"
          quality="100">
          </Image>
        </div>

        <div className={styles.textCon}>
          <h1>Read some words</h1>
          <h2>
            I try my best to document my ideas and my thought processes when I
            work. So if you are at all curios about how I think or work in the
            digital space, have a read of some words.
          </h2>
          <a href='https://medium.com/@LukeStephens' target="_blank"><p>Read the blog.</p></a>
          
        </div>
      </div>
    </div>
  );
}
