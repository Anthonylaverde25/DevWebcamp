import { Button, Typography } from "@mui/material";
import styles from "./../styles/about.module.css";
import teamSvg from "/public/assets/images/teamsvg.svg"; // Ruta relativa al archivo SVG desde HeroAbout.jsx
import speakerImage from "/assets/imagesHome/imagesPonentes/speaker_3.png";
import { OurTeam } from "./OurTeam";
import { SvgPoinst } from "./SvgPoinst";
export const HeroAbout = () => {
  return (
    <>
      <div className={`${styles["hero__about-contend"]}`}>
        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between -mx-4">
              <div className="w-full px-4 lg:w-6/12">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className={`${styles} py-3 sm:py-4`}>
                      <img
                        src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                        alt=""
                        className={`${styles.borderImage} w-full h-full object-cover rounded-2xl`}
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://i.ibb.co/rfHFq15/image-2.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <SvgPoinst />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["about__descriptions-sections"]} w-full px-4 lg:w-1/2 xl:w-5/12`}
              >
                <div className={`${styles.about__description}`}>
                  <span className="block mb-4 text-lg font-semibold text-secondary">
                    Why Choose Us
                  </span>
                  <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                    Work on yourself in the hands of{" "}
                    <span className="text-green">experts</span>
                  </h2>
                  <p className="mb-5 text-base text-body-color dark:text-dark-6">
                    At dev conference, we have chosen the best in the area to
                    help you in your training in the IT world.
                  </p>
                  <p className="mb-8 text-base text-body-color dark:text-dark-6">
                    Take your first steps with us until you master the main
                    technologies
                  </p>

                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white  border-transparent rounded-md px-7 bg-secondary hover:bg-opacity-90"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <OurTeam />
    </>
  );
};

/*




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





*/
