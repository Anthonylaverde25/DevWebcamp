import styles from "./styles/about.module.css";
import { MainLayout } from "../layout";
import { HeroAbout, PricingCards } from "./components";

export const About = () => {
  return (
    <MainLayout>
      {/* Sección del encabezado */}

      <div className={`${styles["hero__about--container"]}`}>
        <HeroAbout />
        <PricingCards />
      </div>
    </MainLayout>
  );
};

/*

<header className="bg-gradient-to-b from-blue-500 to-blue-700 py-10 text-center text-white">
        <h2 className="text-5xl font-bold mb-4">Discover Our Company</h2>
        <p className="text-lg">Develop your skills and those of your team </p>
      </header>




*/
