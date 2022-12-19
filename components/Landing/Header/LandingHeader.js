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

  const homeHandler = () => router.push("/");

  const transactionHandler = () => router.push("/transaction");

  const profileHandler = () =>
    router.push({
      pathname: "/profile",
    });

  const logoutHandler = () => {
    auth.onLogout();
    router.push({
      pathname: "/",
    });
  };

  return (
    <header className="landing-header">
      <div className="items">
        <label
          onClick={homeHandler}
          style={{
            marginRight: "auto",
            color: "white",
            fontWeight: "Bold",
            cursor: "pointer",
          }}
        >
          Home
        </label>
        {/* <ShoppingBasketIcon className="item cart" /> */}
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
        {/* {auth.isSigned() && <div className="divider" />} */}
        {auth.isSigned() && (
          <div id="bangsat" className="item profile">
            <AccountCircleIcon className="item profile-icon" />
            <label>{auth.authData.fullname}</label>
            <div className="profile-options">
              <label onClick={profileHandler}>Profile</label>
              <label onClick={transactionHandler}>Transaksi</label>
              <label onClick={logoutHandler}>Logout</label>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
