import styles from "./styles/contact.module.css";
import { MainLayout } from "../layout/MainLayout";
import { RiMailSendLine } from "react-icons/ri";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ContactsUS = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const initialValues = {
    userName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
    message: Yup.string().required("Please enter your message"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("datos del fomulario:", values);
    resetForm();
    setFormSubmitted(true);
  };

  return (
    <MainLayout>
      <div className={`${styles["form__container-contend"]}`}>
        <div className={`${styles.form__descriptions}`}>
          <h2 className={`${styles.description}`}>
            Do you have any doubt?{" "}
            <span className="text-green">Get in contact</span> with us
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.groupsInput}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="userName"
                  placeholder="name"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className={`${styles["error-message"]}`}
                />
              </div>

              <div className={styles.groupsInput}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={`${styles["error-message"]}`}
                />
              </div>

              <div className={styles.groupsInput}>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Ingrese su mensaje"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={`${styles["error-message"]}`}
                />
              </div>

              <button
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
                <RiMailSendLine size={30} />
              </button>
              {formSubmitted && <p>Form submitted successfully!</p>}
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
};
