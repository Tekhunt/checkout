import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Footer } from "./Components/Footer";
import Register from "./Components/Register/Register";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import { Login } from "./Components/Login";
import { ProductDetails } from "./Components/ProductDetails";
import { CartPage } from "./Pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Footer />} path="/footer" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            {/* <Route element={<CartPage />} path="/product" /> */}
            <Route element={<CartPage />} path="/product/:id" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
