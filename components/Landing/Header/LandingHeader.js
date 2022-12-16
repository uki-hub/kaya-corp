import React from "react";

import { ShoppingBasket as ShoppingBasketIcon } from "@mui/icons-material";
import Link from "next/link";

export default function LandingHeader(props) {
  return (
    <header className="landing-header">
      <div className="items">
        {React.createElement(ShoppingBasketIcon, {
          className: "item cart",
          style: { color: "white", fontSize: "30px" },
        })}
        <Link href={'/signin'}>
          <div className="item">Masuk</div>
        </Link>
        <div className="divider" />
        <div className="item">Daftar</div>
      </div>
    </header>
  );
}
