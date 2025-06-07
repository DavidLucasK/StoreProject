"use client";

import style from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/assets/logoConfeitaria2.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${style.navbarContainer} ${scrolled ? style.scrolled : ""}`}
    >
      <ul className={style.menu}>
        <li>
          <Link href="/">Produtos</Link>
        </li>
        <li>
          <Link className={style.logo} href="/">
            <Image src={Logo} alt="Logo" width={70} quality={100} />
          </Link>
        </li>
        <li>
          <p>Contato</p>
        </li>
      </ul>
    </nav>
  );
}
