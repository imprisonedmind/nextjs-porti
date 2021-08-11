import Image from "next/image";
import styles from "../xpCard/xpCard.module.scss";

export default function XpCard(props) {
  return (
    <div className={styles.xpCon}>
      <div className={styles.imgCon}>
        <Image src={props.img} alt={props.alt} layout="fill"></Image>
      </div>

      <div className={styles.desc}>
        <h1>{props.title}</h1>
        <div className={styles.dateCon}>
          <h2>{props.date}</h2>
          <h2>{props.place}</h2>
        </div>
        <p>{props.desc}</p>
        <p>{props.desc2}</p>
        
      </div>
    </div>
  );
}
