import React, { useContext, useState } from "react";

import {
  ShoppingBasket as ShoppingBasketIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import Link from "next/link";
import AuthContext from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import useScreenInfo from "../../../hooks/useScreenInfo";
import { Dialog, Slide } from "@mui/material";
import BottomSheet from "../../UI/BottomSheet";

export default function LandingHeader(props) {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const isMobile = useScreenInfo().isMobile;

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

  const openMenuHandler = () => setOpen(true);

  const closeMenuHandler = () => setOpen(false);

  return (
    <header className="landing-header">
      <BottomSheet
        open={auth.isSigned() && isMobile && open}
        onClose={closeMenuHandler}
      >
        <div className="bottom-sheet-menu">
          <label onClick={profileHandler}>Profile</label>
          <label onClick={transactionHandler}>Transaksi</label>
          <label onClick={logoutHandler}>Logout</label>
        </div>
      </BottomSheet>
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
        {auth.isSigned() && !isMobile && (
          <div className="item profile">
            <AccountCircleIcon className="item profile-icon" />
            <label>{auth.authData.fullname}</label>
            <div className="profile-options">
              <label onClick={profileHandler}>Profile</label>
              <label onClick={transactionHandler}>Transaksi</label>
              <label onClick={logoutHandler}>Logout</label>
            </div>
          </div>
        )}
        {auth.isSigned() && isMobile && (
          <div className="item profile" onClick={openMenuHandler}>
            <AccountCircleIcon className="item profile-icon" />
            <label>{auth.authData.fullname}</label>
          </div>
        )}
      </div>
    </header>
  );
}
