"use client";

import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import "@/app/components/productCard/styles.css";

interface ProductCardProps {
  data: any,
  requireAuthText?: string
}

export default function ProductCard({
  data,
  requireAuthText = "Sign in or Create an account to see pricing",
}: ProductCardProps) {
  return (
    <div className="product-card">
      {/* Image Section */}
      <div className="product-img-wrapper">
        <Image src={data.image} alt={data.title} width={400} height={450} className="product-img" />
      </div>

      {/* Content */}
      <div className="product-content">
        <h3 className="product-title">{data.title}</h3>

        <p className="auth-text">
          <span className="link">Sign in</span> or {requireAuthText.replace("Sign in ", "")}
        </p>
      </div>

      {/* Wishlist Icon */}
      <button className="wishlist-btn">
        <FiHeart size={22} />
      </button>
    </div>
  );
}
