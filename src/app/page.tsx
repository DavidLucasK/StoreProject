"use client";

import Navbar from "../components/Navbar/Navbar";
import HomeContent from "../components/Home/Home";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";

export default function Index() {
  const [currentPage, setCurrentPage] = useState("/");

  // 2️⃣ Função para atualizar a página ao clicar na Navbar
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="pageContainer">
      <Navbar onNavigate={handleNavigate} />
      <HomeContent />
      <Footer />
    </div>
  );
}
