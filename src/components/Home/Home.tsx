"use client";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.logoHome}>
        <video
          className={styles.video}
          src="/assets/CAKESVIDEO.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
