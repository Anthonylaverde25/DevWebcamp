import styles from "../styles/home.module.css";

export const FilterEvents = () => {
  return (
    <form className={styles.form__filter}>
      <label className={styles.form__label} htmlFor="">
        Popular in:
      </label>
      <input
        className={styles.form__input}
        type="text"
        placeholder="buenos airess..."
      />
    </form>
  );
};
