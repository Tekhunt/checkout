import React from 'react'
import { Footer } from '../../Components/Footer';
import { Header } from "../../Components/Header/Header";
import { ProductDetails } from '../../Components/ProductDetails/ProductDetails';



export const CartPage = () => {
  return (
    <div>
        <Header />
        <ProductDetails />
        <Footer />
    </div>
  )
}
