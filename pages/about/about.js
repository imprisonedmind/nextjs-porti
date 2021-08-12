import Image from "next/image";
import styles from "../about/about.module.scss";
import Navbar from "/comps/nav/Navbar.js";
import Footer from "../footer/footer.js";
import EduCon from "./eduCon.js";
import JobCon from "./jobCon.js";
import Skills from "./skills.js";
import Head from "next/head";

export default function About() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Luke Stephens | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar></Navbar>
      <div className={styles.aboutCon}>
        <div className={styles.CoverImg}>
          <Image
            src="/Images/skateboard.png"
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
            <br></br>
            I recently finished my degree and have since started
            traveling, trying to experience as much of the world as I can.
            <br></br>
            <br></br>
            {/* When it comes to the world of technology and the internet, I am 
            fascinated by the way humans interact with these devices and how they 
            affect us as humans.
            <br></br>
            <br></br> */}
            As you can see by the little self-portrait, I am rather fond of
            skateboarding. Which has lead to a thirst for seeking new thrills and experiences.
            <br></br>
            <br></br>
            If you scroll down you can see some more things I have done.
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
