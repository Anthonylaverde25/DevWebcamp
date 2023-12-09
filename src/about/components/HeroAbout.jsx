import { Typography } from "@mui/material";
import styles from "./../styles/about.module.css";
import teamSvg from "/public/assets/images/teamsvg.svg"; // Ruta relativa al archivo SVG desde HeroAbout.jsx
import speakerImage from "/assets/imagesHome/imagesPonentes/speaker_3.png";
import { OurTeam } from "./OurTeam";
export const HeroAbout = () => {
  return (
    <>
      <div className={`${styles["hero__about-contend"]}`}>
        <div className={`${styles.hero__text}`}>
          <h2>take control of your professional future</h2>
        </div>
        <div className={`${styles.hero__team}`}>
          <div className={`${styles.team__description}`}>
            <Typography variant="h4"> Our team, if it works </Typography>
            <Typography sx={{ fontWeight: "bold" }} variant="body2">
              Our team evolves, establishes strong professional connections and
              makes the most of digital education to advance our goals.
            </Typography>
          </div>
          <div className={`${styles.team__image}`}>
            <img src={teamSvg} alt="" />
          </div>
        </div>
      </div>
      <OurTeam />
    </>
  );
};
