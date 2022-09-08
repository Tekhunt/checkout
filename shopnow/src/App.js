import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Footer } from "./Components/Footer";
import Register from "./Components/Register/Register";
import { AuthProvider } from "./Components/AuthContext/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Footer />} path="/footer" />
            <Route element={<Register />} path="/register" />
            <Route element={<h1>login</h1>} path="/login" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
