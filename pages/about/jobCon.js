import Image from "next/image";
import XpCard from "../../comps/xpCard/XpCard.js";
import styles from "./jobCon.module.scss";

export default function EduCon() {
  return (
    <div className={styles.cardCon}>
      <div className={styles.titleCon}>
        <h1>Work Experience</h1>
      </div>
      <XpCard
        img="/../public/images/xp/lf3.jpeg"
        alt="Lingue Sinze Frontiere"
        title="Lingue Senza Frontiere"
        date="June 2021 - July 2021"
        place="Biella Italy"
        desc="For three weeks between June and July of 2021 I worked as an English tutor at summer camps. "
        desc2="My role as a tutor was to teach a class of 12-15 Italian kids the basics of english through the use of songs, games and dances."
      ></XpCard>
      <XpCard
        img="/../public/images/xp/cc.jpg"
        alt="Lingue Sinze Frontiere"
        title="Caffiene Club"
        date="March 2021 - April 2021"
        place="Plymouth UK"
        desc="Here I worked at Front of House where my role was to meet customers and show them to their seats as well as take their orders and serve them. "
        desc2="I also did general clean up of the restaurant: washing dishes, cleaning toilets and tables, vacuuming the floor."
      ></XpCard>
      <XpCard
        img="/../public/images/xp/specno2.jpg"
        alt="Lingue Sinze Frontiere"
        title="Specno"
        date="June 2019 - Sep 2020"
        place="Paarl South Africa"
        desc="Started as an internship that developed into part-time employment whilst studying."
        desc2="Worked within the company in start-up phase, thus working in many avenues such as Graphic Design, Web Development and UI/UX Systems."
      ></XpCard>
      <XpCard
        img="/../public/images/xp/futa.png"
        alt="Lingue Sinze Frontiere"
        title="Futa Cash"
        date="Aug 2019 - Nov 2019"
        place="Stellenbosch South Africa"
        desc="Freelance Job "
        desc2="Designed the user interface for a mobile payment processing application."
      ></XpCard>
      <XpCard
        img="/../public/images/xp/ginos.png"
        alt="Lingue Sinze Frontiere"
        title="Ginos"
        date="Dec 2018 - June -2019"
        place="Stellenbosch South Africa"
        desc="Part-time job whilst studying"
        desc2="I mainly worked as a pizza delivery driver and would do meet and greet whilst waiting in between deliveries."
      ></XpCard>
      <XpCard
        img="/../public/images/xp/fg.png"
        alt="Lingue Sinze Frontiere"
        title="Footgear"
        date="June 2017 - Jul 2017"
        place="Willowbridge South Africa"
        desc="Highschool Internship"
        desc2="First job introduction into Graphic Design, where my role was to support and learn from the designer as tasks where handed down to me."
      ></XpCard>
    </div>
  );
}
