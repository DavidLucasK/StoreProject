"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      <Link href={"https://www.davidlucasfr.com.br"} target="blank">
        <p>LOGO</p>
      </Link>
      <p>© 2025 Salve uma Criança. Todos os direitos reservados.</p>
    </div>
  );
}
