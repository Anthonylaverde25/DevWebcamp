import styles from "./styles/contact.module.css";
import { MainLayout } from "../layout/MainLayout";
import { RiMailSendLine } from "react-icons/ri";
import { FaCircleExclamation } from "react-icons/fa6";
import { SvgPoinst } from "../about/components/SvgPoinst";

export const ContactsUS = () => {
  return (
    <MainLayout>
      <div className={`${styles["form__container-contend"]}`}>
        <div className={`${styles.form__descriptions}`}>
          <h2 className={`${styles.description}`}>
            Do you have any doubt?{" "}
            <span className="text-green">Get in contact</span> with us
          </h2>
        </div>

        <form className={`${styles.form}`}>
          <div className={`${styles.groupsInput}`}>
            <label
              htmlFor="name"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>

            <input type="text" id="name" name="userName" placeholder="name" />
          </div>

          <div className={`${styles.groupsInput}`}>
            <label
              htmlFor="email"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>

            <input type="email" id="email" name="email" placeholder="Email" />
          </div>

          <div className={`${styles.groupsInput}`}>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Message
            </label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>

          <button type="submit" className={`${styles.button}`}>
            Send Message
            <RiMailSendLine size={30} />
          </button>
        </form>
      </div>
    </MainLayout>
  );
};
