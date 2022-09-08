import React from "react";
import { FooterWrapper } from "./FooterStyles";
import twitterzo from "../../assets/icons/twitterzo.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import pinterest from "../../assets/icons/pinterest.svg";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="foot-contianer">
        <div className="foot-map">
          <h2 className="first">About ShopNow</h2>
          <p>About us</p>
          <p>Careers</p>
          <p>Help center</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="foot-map">
          <h2 className="first">Payment</h2>
          <p>Visa card</p>
          <p>Master card</p>
          <p>Wallet</p>
          <p>Pay on delivery</p>
        </div>
        <div className="foot-map soc">
          <h2 className="first">Get in touch</h2>
          <div className="social">
            <img src={twitterzo} alt="icons" />
            <img src={facebook} alt="icons" />
            <img src={linkedin} alt="icons" />
            <img src={pinterest} alt="icons" />
          </div>
        </div>
      </div>
      <p className="copyright">Copyrights © 2021 All right reserved by Riteshop</p>
    </FooterWrapper>
  );
};
