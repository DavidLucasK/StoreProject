"use client";

import styles from "./Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <p className={styles.logo}>ALO</p>
    </div>
  );
}
