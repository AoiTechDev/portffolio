import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@assets/icons/nobg-logo.png";
const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" className="logo-link">
        <Image src={logo} width={200} height={50} className="logo" alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
