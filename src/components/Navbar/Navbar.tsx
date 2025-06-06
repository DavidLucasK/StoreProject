"use client";

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
  );
}
