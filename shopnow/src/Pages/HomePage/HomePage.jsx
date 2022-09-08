import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header/Header";
import { Home } from "../../Components/Home";

export const HomePage = () => {
  const [alert, setAlert] = useState(true);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
