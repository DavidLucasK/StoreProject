"use client";

import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Image from "next/image";

type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
  url_img: string
}



export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    async function fetchProducts(){
      try {
        
        const res = await fetch("https://apizinha-psi.vercel.app/api/products");

        const data = await res.json();

        setProducts(data);
        
        console.log(data);

      } catch (error) {
        console.error("fudeu2",error);
      }
    }

    fetchProducts();
  }, []

)


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
      <div>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            {product.title}
            <Image src={product.url_img} alt="asdasfa" width={300} height={300} />
          </div>
        ) )}
      </div>
    </div>
  );
}
