import Image from "next/image";
import styles from "../about/skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.main}>
      <div className={styles.cardCon}>
        <div className={styles.skillsTitle}>
          <h1>Skills</h1>
        </div>

        <div className={styles.skillType}>
          <div className={styles.skillTypeCon}>
            <h1>Competency</h1>
            <p>2D & 3D Design</p>
            <p>Animation</p>
            <p>Design Research</p>
            <p>Frontend Development</p>
            <p>Rapid Prototyping</p>
            <p>User Experience Design</p>
            <p>User Interface Design</p>
            <p>Web Design</p>
          </div>

          <div className={styles.skillTypeCon}>
            <h1>Software</h1>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/ae.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W80}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/xd.png"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W90}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/ai.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W40}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/photo.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W80}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/apr.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W60}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/blender.png"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W40}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/cinema.png"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W30}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/figma.png"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W40}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/framer.png"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W30}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/invision.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W40}></div>
              </div>
            </div>
          </div>

          <div className={styles.skillTypeCon}>

            <h1>Code</h1>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/html.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W60}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/css.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W80}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/sass.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W50}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/tail.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W30}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/boot.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W40}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/js.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W30}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/c.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W20}></div>
              </div>
            </div>

            <h1>Frameworks</h1>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/angular.png"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W30}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/gatbsy.png"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W10}></div>
              </div>
            </div>

            <div className={styles.softCon}>
              <div>
                <Image
                  src="/../public/images/logos/next-js.svg"
                  layout="fill"
                ></Image>
              </div>
              <div>
                <div id={styles.W20}></div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
