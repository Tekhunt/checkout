import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FiUserCheck } from "react-icons/fi";
import cart from "../../assets/icons/cart.svg";
// import { logout } from "../logoutService";
import { Link } from "react-router-dom";
import shop from "../../assets/icons/shop.svg";

import notification from "../../assets/icons/notification.svg";

import {
  AuthWrapper,
  Parent,
  HeaderWrapper,
  Linkwrapper,
  MenuContainer,
} from "./HeaderStyles";
import { Mobile } from "../Mobile/Mobile";
export const Header = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Parent>
      <>
        <HeaderWrapper>
          <Link to="/">
            <img src={shop} alt="logo" />
          </Link>

          <div className="hamburger" onClick={handleToggle}>
            {open ? (
              <MdClose
                style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
              />
            )}
          </div>

          <Linkwrapper>
            <a href="https://tekhunt.me">About</a>
            <a href="https://tekhunt.me"> <span> Products</span> <HiOutlineChevronDown /></a>
            <a href="https://tekhunt.me">Customer service</a>
            <a href="https://tekhunt.me">Sell</a>
            <a href="https://tekhunt.me">Partners</a>
          </Linkwrapper>

          <AuthWrapper>
            <a href="https://tekhunt.me">
              <img src={cart} alt="cart" />{" "}
            </a>
            <div className="user" onClick={() => setModal(!modal)}>
              <FiUserCheck />
            </div>

            <Link to="/notifications">
              <img src={notification} alt="notification" />
            </Link>
          </AuthWrapper>
        </HeaderWrapper>
        {open && (
          <MenuContainer>
            <Mobile />
            {/* <Menu /> */}
          </MenuContainer>
        )}
      </>
    </Parent>
  );
};
