import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bilal</h1>
        <p className={styles.description}>
          Welcome to my digital portfolio. I am a developer proficient
          in languages such as JavaScript, TypeScript, and Python, as well as
          frameworks like React and .NET!
        </p>
        <a
          href="mailto:bilal.khan1071@hotmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/manWorking.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
