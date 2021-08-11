import Image from "next/image";
import styles from "./eduCon.module.scss";

export default function EduCon() {
    return(
        <div className={styles.cardCon}>
        <div className={styles.education}>
          <div className={styles.eduLeft}>
            <div className={styles.eduTitle}>
              <h1>Education</h1>
            </div>

            <div className={styles.schoolCon}>
              <div className={styles.schools}>
                <div className={styles.school}>
                  <h1>Stellenbosch Academy of Design and Photography</h1>
                  <h2>South Africa, Stellenbosch. Jan 2018 - Dec 2020</h2>
                  <p>
                    BA Visual Communications Degree. - Major in Multi Media
                    Design.
                  </p>
                </div>
              </div>

              <div className={styles.schools}>
                <div className={styles.school}>
                  <h1>South African College School</h1>
                  <h2>South Africa, Newlands. Feb 2015 - Dec 2017</h2>
                  <p>High School - National Senior Certificate.</p>
                </div>
              </div>

              <div className={styles.schools}>
                <div id={styles.prg} className={styles.school}>
                  <h1>Paul Roos Gymnasium</h1>
                  <h2>South Africa, Stellenbosch. Jan 2013 - Dec Feb 2015</h2>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imgCon}>
            <Image src="/Images/luke.jpg" layout="fill"></Image>
          </div>
        </div>
      </div>
    )
}