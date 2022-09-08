import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LoginWrapper, HeaderWrapper, RegBody } from "./LoginStyles";
import riteshop from "../../assets/icons/riteshop.svg";
import icon3 from "../../assets/icons/icon3.svg";
import fb1 from "../../assets/icons/fb1.svg";
import twitter1 from "../../assets/icons/twitter1.svg";
import loginAvatar from "../../assets/images/loginAvatar.png";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password).then(
        () => {
        //   navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const authUser = JSON.parse(localStorage.getItem('user') || '{}')
//   console.log(authUser)
//   const token = authUser.token;

  return (
    <>
      <LoginWrapper>
        <HeaderWrapper>
          <div>
            <img className="logo" src={riteshop} alt="riteshop" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </HeaderWrapper>

        <RegBody>
          <div className="action">
            <div className="head">
              <h3>Login with</h3>
            </div>
            <div className="icons-wrapper">
              <div>
                {" "}
                <img src={icon3} alt="riteshop" />
              </div>
              <div className="opaque">
                {" "}
                <img src={fb1} alt="riteshop" />
              </div>
              <div className="opaque">
                {" "}
                <img src={twitter1} alt="riteshop" />
              </div>
            </div>
            <p className="or">Or</p>
            <form onSubmit={handleLogin}>
              <div className="input-container">
                <label>Email</label>
                <input
                  type="text"
                  name="first name"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-container">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>

          <div className="prompt">
            <h1>
              <span>Log In</span>
            </h1>
            <div className="avatar-container">
              <img src={loginAvatar} alt="prompt" />
            </div>
            <p className="login-prompt">
              You do not have an Account? <br /> You can{" "}
              <Link to="/register">Sign up</Link> here
            </p>
          </div>
        </RegBody>
      </LoginWrapper>
    </>
  );
};