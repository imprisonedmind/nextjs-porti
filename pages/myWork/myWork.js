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
          Img="/Images/erin-phone.png"
          alt="Erin mobile UI"
          LogoImg="/Images/logos/xd.png"
          LogoAlt=""
          title="Erin"
          title2="UI/UX"
          desc="Erin is an emotion tracking application, That lets you know how your apps make you feel."
        ></WorksCard>

        <WorksCard
          Img="/Images/lockdown.png"
          alt="The Great Lockdown"
          LogoImg="/Images/logos/ae.png"
          LogoAlt=""
          title="The Great Lockdown"
          title2="ANIMATION"
          desc="This animation was a 3rd year uni project where we were tasked with animating our experience within lockdown."
        ></WorksCard>

        <WorksCard
          Img="/Images/wallpaper.png"
          alt="Acid Mage"
          LogoImg="/Images/logos/unity.png"
          LogoAlt=""
          title="Acid Mage"
          title2="GAME DESIGN"
          desc="Acid Mage is a 2d plat-former that follows a girl stuck inside her own acid trip which she must escape."
        ></WorksCard>

        <WorksCard
          Img="/Images/logo-mock.png"
          alt="Instafamous project animation"
          LogoImg="/Images/logos/ae.png"
          LogoAlt=""
          title="Instafamous"
          title2="ANIMATION"
          desc="This animation was a uni project in which we were tasked with doing a logo reveal."
        ></WorksCard>
        <WorksCard
          Img="/Images/2.png"
          alt="Blink and Sqeeki"
          LogoImg="/Images/logos/ae.png"
          LogoAlt=""
          title="Blinki and Sqeeki"
          title2="ANIMATION"
          desc="This animation was a 2nd year uni project following the realtionship between two friends trying to apply for Adventure Time."
        ></WorksCard>

        <WorksCard
          Img="/Images/skateboard.png"
          alt="Luke Stephens Skateboarder"
          LogoImg="/Images/logos/blender.png"
          LogoAlt=""
          title="Skateboard dude"
          title2="3D"
          desc="A simple character created for my personal branding."
        ></WorksCard>
        <WorksCard
          Img="/Images/coverLeft.png"
          alt="Luke Stephens welcome and laptop"
          LogoImg="/Images/logos/blender.png"
          LogoAlt=""
          title="Laptop wave"
          title2="3D"
          desc="A simple character created for my personal branding."
        ></WorksCard>
        <WorksCard
          Img="/Images/read.png"
          alt="Luke Stephens character reading"
          LogoImg="/Images/logos/blender.png"
          LogoAlt=""
          title="Reading"
          title2="3D"
          desc="A simple character created for my personal branding."
        ></WorksCard>
        <WorksCard
          Img="/Images/education.jpg"
          alt="Luke Stephens education character"
          LogoImg="/Images/logos/blender.png"
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
