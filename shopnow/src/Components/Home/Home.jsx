import React, { useState, useEffect } from "react";
import { HomeWrapper, ProductsWrapper } from "./HomeStyles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/products/")
      .then((response) => {
        // console.log("Data =>", response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!products) return null;

  
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

      <ProductsWrapper>
        <div className="container">
          <div className="row row-2">
            <h2>All Products</h2>
            <select>
              <option>Default Sorting</option>
              <option>Short by price</option>
              <option>Short by popularity</option>
              <option>Short by Rating</option>
              <option>Short by Sale</option>
            </select>
          </div>
          {/* <h2>Our Top Products</h2> */}
          <ul>
            {loading ? (
              <div className="spinner yy"></div>
            ) : (
              products.map((product, index) => {
                return (
                  <li key={product.id} className="product-block">
                    <img src={product.image} />
                    <p className="price">
                      <span className="newPrice">${0.9 * product.price}</span>{" "}
                      <span className="formerPrice">${product.price}</span>
                    </p>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <button className="product-btn" onClick={() => navigate(`product/${product.id}`)}>
                      More Info
                    </button>
                  </li>
                );
              })
            )}
          </ul>
          <div className="pgn-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
          </div>
        </div>
      </ProductsWrapper>
    </HomeWrapper>
  );
};
