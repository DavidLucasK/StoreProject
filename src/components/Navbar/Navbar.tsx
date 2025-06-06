"use client";

<<<<<<< HEAD
import style from "./Navbar.module.css";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Navbar() {
     const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 30;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className={`${style.navbar} ${scrolled ? style.scrolled : ''}`}>
       <nav className={style.navbarContainer}>
            <ul className={style.menu}>
                <li><Link href="/"> Cardapio </Link></li>
                <li><Link href="/">  </Link></li>
            </ul>
       </nav>
    </div>
=======
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem/NavItem";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const items: NavItemInterface[] = [
    //TODO:
    //Change all the url's to the right ones once they're finished
    {
      url: "/about",
      label: "Quem Somos",
    },
    {
      url: "/team",
      label: "Equipe",
    },
    {
      url: "/donators",
      label: "Doadores",
    },
    {
      url: "/projects",
      label: "Projetos",
    },
    {
      url: "/events",
      label: "Eventos",
    },
    {
      url: "/contact",
      label: "Contato",
    },
  ];

  const pathName = usePathname();

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

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logoContainer}>
        <p>LOGO</p>
      </Link>
      <ul className={`${styles.bagulhos} ${openMenu ? styles.open : ""}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={pathName === item.url ? styles.active : ""}
          >
            <NavItem
              url={item.url}
              label={item.label}
              isActive={pathName === item.url}
              openMenu={openMenu ? true : false}
            />
          </li>
        ))}
      </ul>
      <Link href="/contribua" className={styles.botaoContribua}>
        <p>Contribua</p>
      </Link>
      <button
        className={`${styles.btnMobile} ${scrolled ? styles.scrolled : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? <FaBars /> : <FaXmark />}
      </button>
    </nav>
>>>>>>> 9ca4db62bd5d9a731462761eb3adbd719f071d19
  );
}
