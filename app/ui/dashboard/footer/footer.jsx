import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>DevTaylan</div>
      <div className={styles.text}>All rights...</div>
    </div>
  );
};
