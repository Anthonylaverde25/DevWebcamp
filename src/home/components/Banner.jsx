import React from "react";
import styles from "../styles/home.module.css";
export const Banner = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.banner_container}`}>
        <div>
          <img src="/assets/imagesBanner/rails-svgrepo-com.svg" alt="" />
        </div>
        <div>
          <img src="/assets/imagesBanner/laravel-svgrepo-com.svg" alt="" />
        </div>
        <div>
          <img src="/assets/imagesBanner/mysql-svgrepo-com.svg" alt="" />
        </div>
        <div>
          <img src="/assets/imagesBanner/php02-svgrepo-com.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
