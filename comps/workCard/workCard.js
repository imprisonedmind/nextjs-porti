import styles from "../../styles/workCard.module.scss";
import Image from "next/image";

const workCard = (props) => {
  return (
    <div className={styles.cardCon}>
      <div className={styles.logo}>
        <Image 
            src={props.logo} 
            alt={props.logoAlt} 
            layout="fill">
        </Image>
      </div>
      <Image
        className={styles.img}
        src={props.img}
        alt={props.alt}
        layout="fill"
      ></Image>
    </div>
  );
};

export default workCard;
