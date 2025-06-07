"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import LogoDL from "@/../public/assets/logoConfeitaria3.png";

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.footerContainer} ${
        scrolled ? styles.footerContainerScrolled : ""
      }`}
    >
      <Link
        className={styles.logoImg}
        href={"https://www.davidlucasfr.com.br"}
        target="blank"
      >
        <Image src={LogoDL} alt="Logo" width={50} quality={100} />
      </Link>
      <p>© 2025 J&D Patisserie. Todos os direitos reservados.</p>
    </div>
  );
}
