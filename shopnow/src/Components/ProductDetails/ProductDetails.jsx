import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductDetailsWrapper } from "./ProductDetailStyles";
import axios from "axios";

export const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        console.log("Data =>", response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductDetailsWrapper>
      {/* {data.map((item, index) => {
        return (
          <> */}
            <div className="left-wrapper">
              <div className="left">
                <div className="small-img">
                  {" "}
                  <img src={data.image} alt="" />{" "}
                </div>
                <div className="small-img">
                  {" "}
                  <img
                    src={data.image}
                    alt=""
                  />{" "}
                </div>
                <div className="small-img">
                  {" "}
                  <img
                    src={data.image}
                    alt=""
                  />{" "}
                </div>
                <div className="small-img">
                  {" "}
                  <img
                    src={data.image}
                    alt=""
                  />{" "}
                </div>
              </div>
              <div className="large-img">
                <img
                  src={data.image}
                  alt=""
                />
              </div>
            </div>

            <div className="txt">
              <p className="code">Product code: {data.sku}</p>
              <p className="name">{data.name}</p>
              <p>{data.description}</p>
              <div className="available">
                <p className="lit">Availability:</p>
                <p className="instock">{data.status}</p>
              </div>

              <hr />

              <div className="available">
                <p className="lit">Price:</p>
                <div className="value">
                  <span className="discount">${0.9*data.price}</span>
                  <span className="former">${data.price}</span>
                </div>
              </div>

              <hr />

              <div className="count">
                <div className="fl2">
                  <p className="lit">Quantity</p>
                  <div className="child">
                    <div>-</div>
                    <div>0</div>
                    <div>+</div>
                  </div>
                </div>
                <div className="fl3">
                  <p className="lit">Size</p>
                  <div className="size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                  </div>
                </div>
                <div className="fl4">
                  <p className="lit">Color</p>
                  <div className="color">
                    <div>
                      {" "}
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      {" "}
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      {" "}
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      {" "}
                      <input type="radio" name="radio" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="fl5">
                <button>Cart</button>
                <button>Like</button>
              </div>
            </div>
          {/* </>
        );
      })} */}
    </ProductDetailsWrapper>
  );
};
