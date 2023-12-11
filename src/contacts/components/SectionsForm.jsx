import styles from "./../styles/contact.module.css";
import { FormContact } from "./FormContact";

export const SectionsForm = () => {
  return (
    <section className={`${styles["form__container-grid"]}bg-magenta`}>
      <div className={`${styles.form__description}`}>
        <h2 className={`${styles.description}`}>
          Do you have any doubt?{" "}
          <span className="text-green">Get in contact</span> with us
        </h2>
      </div>
    </section>
  );
};

{
  /*         <form className={`${styles.form}`}></form>

  <div className={`${styles["form-contend"]}`}>
        <FormContact />
      </div>
   */
}
