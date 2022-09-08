import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FiUserCheck } from "react-icons/fi";
import cart from "../../assets/icons/cart.svg";
import { MenuWrapper } from "./MobileStyles";

export const Mobile = () => {
  const navigate = useNavigate();

  const toService = () => {
    navigate("/services", { replace: true });
  };

  return (
    <MenuWrapper>
      <p>About</p>
      <div className="service" onClick={toService}>
        <p>Products</p>
        <p>
          <HiOutlineChevronRight />
        </p>
      </div>
      <p>Customer service</p>
      <p>Sell</p>
      <p>Partners</p>
      <p className="sign-in">
        <img src={cart} alt="cart" />
      </p>
      <div className="user">
        <FiUserCheck />
      </div>
    </MenuWrapper>
  );
};
