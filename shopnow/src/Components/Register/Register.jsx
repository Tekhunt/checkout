import { useState, useContext } from "react";
// import AuthContext from "../context/AuthContext";
import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RegisterWrapper, HeaderWrapper, RegBody } from "./RegisterStyles";
import registerAvatar from "../../assets/images/Avatar.png";
import shop from "../../assets/icons/shop.svg";
import icon3 from "../../assets/icons/icon3.svg";
import fb1 from "../../assets/icons/fb1.svg";
import twitter1 from "../../assets/icons/twitter1.svg";

function Register() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(name, email, password);
  };

  return (
    <RegisterWrapper>
      <HeaderWrapper>
        <div>
          <img className="logo" src={shop} alt="shopNow" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </HeaderWrapper>

      <RegBody>
        <div className="prompt">
          <h3>
            Create an <span>account</span>
          </h3>
          <div className="avatar-container">
            <img src={registerAvatar} alt="prompt" />
          </div>
          <p className="login-prompt">
            Not creating an Account? <br /> You can{" "}
            <Link to="/login">Login</Link> here
          </p>
        </div>
        <div className="action">
          <div className="head">
            <h3>Create account with</h3>
          </div>
          <div className="icons-wrapper">
            <div>
              {" "}
              <img src={icon3} alt="shopNow" />
            </div>
            <div className="opaque">
              {" "}
              <img src={fb1} alt="riteNow" />
            </div>
            <div className="opaque">
              {" "}
              <img src={twitter1} alt="riteNow" />
            </div>
          </div>
          <p className="or">Or</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>User name</label>
              <input
                type="text"
                name="first name"
                placeholder="Enter first name"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

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
            <div className="input-container">
              <label>Confirm password</label>
              <input
                type="password"
                name="password"
                placeholder="Confirm password"
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <p className="login-prompt">
            Not creating an Account? <br /> You can{" "}
            <Link to="/login">Login</Link> here
          </p>
        </div>
      </RegBody>
    </RegisterWrapper>

  );
}

export default Register;
