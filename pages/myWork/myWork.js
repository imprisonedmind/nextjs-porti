import WorksCard from "../../comps/worksCard/WorksCard.js";
import Navbar from "../../comps/nav/Navbar.js";
import Footer from "../../pages/footer/footer.js";
import styles from "../myWork/myWork.module.scss";
// test
export default function myWork() {
  return (
    <div className={styles.main}>
      <Navbar></Navbar>

      <div className={styles.contentCon}>
        <WorksCard
          Img="/images/erin-phone.png"
          alt="Erin mobile UI"
          LogoImg="/images/logos/xd.png"
          LogoAlt=""
          title="Erin"
          title2="UI/UX"
          desc="Erin is an emotion tracking application, That lets you know how your apps make you feel."
        ></WorksCard>

        <WorksCard
          Img="/images/lockdown.png"
          alt="The Great Lockdown"
          LogoImg="/images/logos/ae.png"
          LogoAlt=""
          title="The Great Lockdown"
          title2="ANIMATION"
          desc="This animation was a 3rd year uni project where we were tasked with animating our experience within lockdown."
        ></WorksCard>

        <WorksCard
          Img="/images/wallpaper.png"
          alt="Acid Mage"
          LogoImg="/images/logos/unity.png"
          LogoAlt=""
          title="Acid Mage"
          title2="GAME DESIGN"
          desc="Acid Mage is a 2d plat-former that follows a girl stuck inside her own acid trip which she must escape."
        ></WorksCard>

        <WorksCard
          Img="/images/logo-mock.png"
          alt="Instafamous project animation"
          LogoImg="/images/logos/ae.png"
          LogoAlt=""
          title="Instafamous"
          title2="ANIMATION"
          desc="This animation was a uni project in which we were tasked with doing a logo reveal."
        ></WorksCard>
        <WorksCard
          Img="/images/2.png"
          alt="Blink and Sqeeki"
          LogoImg="/images/logos/ae.png"
          LogoAlt=""
          title="Blinki and Sqeeki"
          title2="ANIMATION"
          desc="This animation was a 2nd year uni project following the realtionship between two friends trying to apply for Adventure Time."
        ></WorksCard>

        <WorksCard
          Img="/images/skateboard.png"
          alt="Luke Stephens Skateboarder"
          LogoImg="/images/logos/blender.png"
          LogoAlt=""
          title="Skateboard dude"
          title2="3D"
          desc="A simple character created for my personal branding."
        ></WorksCard>
        <WorksCard
          Img="/images/coverLeft.png"
          alt="Luke Stephens welcome and laptop"
          LogoImg="/images/logos/blender.png"
          LogoAlt=""
          title="Laptop wave"
          title2="3D"
          desc="A simple character created for my personal branding."
        ></WorksCard>
        <WorksCard
          Img="/images/read.png"
          alt="Luke Stephens character reading"
          LogoImg="/images/logos/blender.png"
          LogoAlt=""
          title="Reading"
          title2="3D"
          desc="A simple character created for my personal branding."
        ></WorksCard>
        <WorksCard
          Img="/images/education.jpg"
          alt="Luke Stephens education character"
          LogoImg="/images/logos/blender.png"
          LogoAlt=""
          title="Education"
          title2="3D"
          desc="A simple character created for my personal branding."
        ></WorksCard>
      </div>

      <Footer></Footer>
    </div>
  );
}
