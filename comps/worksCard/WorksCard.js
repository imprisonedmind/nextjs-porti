import Image from "next/image";
import styles from "../../styles/worksCard.module.scss";

export default function WorksCard(props) {
  return (
    <div className={styles.wcCon}>
      <div className={styles.imgCon}>
        <Image 
            src={props.Img} 
            layout="fill"
            alt={props.alt}></Image>
        <div className={styles.logoCon}>
        <Image 
            src={props.LogoImg} 
            layout="fill"
            alt={props.LogoAlt}></Image>
        </div>
      </div>

      <div className={styles.desc}>
        <h1>{props.title}</h1>
        <h1>{props.title2}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
