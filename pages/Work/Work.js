import workCard from "../../comps/workCard/workCard.js";
import WorkCard from "../../comps/workCard/workCard.js";
import styles from "../Work/work.module.scss";
import Image from "next/image";
import Link from "next/link"

export default function Work() {
  return (
    <div className={styles.Main}>
      <div className={styles.headerCon}>
        <h1>check out some of my recent work</h1>
        <p>There's a little something for everyone!</p>
      </div>

      <div className={styles.workCardCon}>
        <WorkCard
          img="/../public/images/erin-phone.png"
          alt="Test about the image"
          logo="/../public/images/logos/xd.png"
          logoAlt=""
        ></WorkCard>

        <a href="https://youtu.be/uiWCEWqaYfY" target="_blank">
        <WorkCard
          img="/../public/images/lockdown.png"
          alt="Test about the image"
          logo="/../public/images/logos/ae.png"
          logoAlt=""
        ></WorkCard>
        </a>


        <WorkCard
          img="/../public/images/screenshot.jpg"
          alt="Test about the image"
          logo="/../public/images/logos/xd.png"
          logoAlt=""
        ></WorkCard>

        <WorkCard
          img="/../public/images/homie.png"
          alt="Test about the image"
          logo="/../public/images/logos/blender.png"
          logoAlt=""  
        ></WorkCard>
      </div>

      <div className={styles.discover}>
      <Link href="/myWork/myWork">
        <div className={styles.discoverCon}>
          <div className={styles.newBtn}><h1>NEW</h1></div>
          <p className={styles.pDiscover}>Explore more works</p>
          <div className={styles.arrow}>
            <Image
              src="/../public/images/arrow.png"
              layout="fill"
            ></Image>
          </div>
          </div>
          </Link>


      </div>
    </div>
  );
}
