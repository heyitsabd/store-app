"use client";

import Image from "next/image";
import "@/app/components/header/styles.css";
import { FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import Heading from "@/app/components/headings";

interface HeaderProps {
  activeRoute: string;
  setActiveRoute: (route: string) => void;
}

function Header({ activeRoute, setActiveRoute }: HeaderProps) {
  return (
    <div className="navbar">
      <div className="topbar">
        <Image src="/Logo.svg" alt="logo" width={35} height={35} />
        <div className="name">LOGO</div>
        <div className="icons" >
          <FiSearch />
          <FiHeart />
          <FiShoppingBag />
          <CgProfile />
          <div className="down-btn" >
            <span>ENG</span><FaAngleDown className="icon" />
          </div>
        </div>
      </div>
      <div className="navigation">
        <button onClick={() => setActiveRoute("shop")}>SHOP</button>
        <button onClick={() => setActiveRoute("skills")}>SKILLS</button>
        <button onClick={() => setActiveRoute("stories")}>STORIES</button>
        <button onClick={() => setActiveRoute("about")}>ABOUT</button>
        <button onClick={() => setActiveRoute("contact")}>CONTACT US</button>
      </div>
      <hr className="hr-primary" />
      <Heading />
    </div>
  );
}

export default Header;
