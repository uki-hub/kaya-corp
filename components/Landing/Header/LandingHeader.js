import React, { useContext } from "react";

import {
  ShoppingBasket as ShoppingBasketIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import Link from "next/link";
import AuthContext from "../../../contexts/AuthContext";
import { useRouter } from "next/router";

export default function LandingHeader(props) {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const transactionHandler = () => router.push("/transaction");
  const profileHandler = () =>
    router.push({
      pathname: "/profile",
    });
  const logoutHandler = () => auth.onLogout();

  return (
    <header className="landing-header">
      <div className="items">
        <ShoppingBasketIcon className="item cart" />
        {!auth.isSigned() && (
          <>
            <div style={{ width: "5px" }} />
            <Link href={"/login"}>
              <div className="item">
                <label>Masuk</label>
              </div>
            </Link>
            <div className="divider" />
            <Link href={"/register"}>
              <div className="item">
                <label>Daftar</label>
              </div>
            </Link>
          </>
        )}
        {auth.isSigned() && <div className="divider" />}
        {auth.isSigned() && (
          <div className="item">
            <AccountCircleIcon className="item profile" />
            <label>{auth.authData.fullname}</label>
            <ul>
              <li>
                <label onClick={profileHandler}>Profile</label>
              </li>
              <li>
                <label onClick={transactionHandler}>Transaksi</label>
              </li>
              <li>
                <label onClick={logoutHandler}>Logout</label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
