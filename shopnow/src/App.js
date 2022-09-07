import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Footer />} path="/footer" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
