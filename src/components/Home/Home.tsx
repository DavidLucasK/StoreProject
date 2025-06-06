"use client";

import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/institutoHome.svg";
import Popup from "../Popup";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import stylesPopup from "../Popup.module.css";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); // Exibe após 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Image
        className={styles.logoHome}
        width={800}
        height={450}
        src={logo}
        alt="5"
      />
      <Popup />
      <Popup side="left" />
    </div>
  );
}
