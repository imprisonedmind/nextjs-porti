import Image from "next/image";
import styles from "../about/about.module.scss";
import Navbar from "/comps/nav/Navbar.js";
import Footer from "../footer/footer.js";
import EduCon from './eduCon.js'
import JobCon from './jobCon.js'
import Skills from './skills.js'

export default function About() {
  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.aboutCon}>
        <div className={styles.CoverImg}>
          <Image
            src="/../public/images/skateboard.png"
            layout="fill"
            quality="100"
          ></Image>
        </div>

        <div className={styles.about}>
          <h1>
            some things <span>about me</span>
          </h1>
          <p>
            Hi again!
            <br></br>
            <br></br>
            My name is Luke and I was born in sunny South Africa and grew up
            within the Western Cape area.
            <br></br>
            <br></br>I recently finished my degree and have since started
            traveling, trying to experience as much of the world as I can. So
            far I have been to the west coast of America, Scotland and I am
            currently in England in a little city called Plymouth. I am
            hopefully off to italy at the end of this month.
            <br></br>
            <br></br>
            As you can see by the little dude to the left I absolutely adore
            skateboarding! I like to experience new thrills and recently learnt
            to snowboard and also got a chance to skydive.
            <br></br>
            <br></br>
            If you scroll down you can see some more things I have done, It's
            kinda structured like a CV.
            <br></br>
            <br></br>
            Enjoy!
          </p>
        </div>
      </div>

    <EduCon></EduCon>
    <JobCon></JobCon>
    <Skills></Skills>

      <Footer></Footer>
    </div>
  );
}
