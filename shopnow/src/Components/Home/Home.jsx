import React from "react";
import { HomeWrapper } from "./HomeStyles";

export const Home = () => {
  return (
    <HomeWrapper>
      <div className="grid-two">
        <div className="col-1">
          <h2>Special offers for first time customers</h2>
          <h1>
            Get <br />
            <span className="amazing">Amazing</span> <br /> Deals Here!{" "}
            <span>
              <i className="fa-solid fa-arrow-trend-up"></i>
            </span>
          </h1>
          <p>
            ShopNow offers you amazing shopping experience.
            <br /> Start shopping now..!
          </p>
          <div className="btns">
            <a href="#" className="btn-1">
              Get started
            </a>
            <a href="#" className="btn-2">
              Discover
            </a>
          </div>
        </div>

        <div className="col-2">
          {/* <img src="https://i.postimg.cc/nVv10FZP/st.jpg" alt="" /> */}
          <img src="https://i.postimg.cc/nVv10FZP/st.jpg" alt="" />
        </div>
      </div>
    </HomeWrapper>
  );
};
