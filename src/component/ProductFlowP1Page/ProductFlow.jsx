import ShowProduct from "./ShowProduct";
import ProductDesc from "./ProductDesc"
import Product from "./img/Product.png";
import "./styles/productFlow.css";
import Delivery from "./Delivery";
import FrequentProduct from '../Sliders/FrequentProducts'
import IdealSlider from "../Sliders/IdealSlider"
import ReviewSlider from "../Sliders/ReviewSlider"
import Btn from "./Btn";
import close from "./img/X.png"
import { useNavigate}from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// function Scroll(){
//     return{
//         document.getElementById("target-id").style.display = "none";
//     }
// }
function ProductFlow() {
    const navigate = useNavigate();


    const [lastYPos, setLastYPos] = React.useState(0);
    const [shouldShowActions, setShouldShowActions] = React.useState(false);
  
    React.useEffect(() => {
      function handleScroll() {
        const yPos = window.scrollY;
        const isScrollingUp = yPos < lastYPos;
  
        setShouldShowActions(isScrollingUp);
        setLastYPos(yPos);
      }
  
      window.addEventListener("scroll", handleScroll, false);
  
      return () => {
        window.removeEventListener("scroll", handleScroll, false);
      };
    }, [lastYPos]);


    return (
    <div className='product-flow'>
        <div className='product-upper'>
            <img src={close} alt="close-nav" className='cross' onClick={() => navigate(-1)} />
            <div className='slider-box'>
                <FrequentProduct />
            </div>
            <ShowProduct img={Product} />
        </div>

        <div className='product-content'>
        <div className='content'>
            <ProductDesc 
            prodName="Product Name" 
            price="149" 
            desc="Lorem ur dl labore et dolor aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" />
            <div className='ideal-slider-box'>
                <p className='ideal-text'>Ideal for</p>
                <IdealSlider />
            </div>
            <div className='delivery-box'>
                <Delivery deliveryName="Standard" deliveryPrice="49" emoji="🚲" />
                <Delivery deliveryName="Express" deliveryPrice="89" emoji="🚀" />
            </div>
            <p className='review'>Reviews</p>
            <ReviewSlider />
        </div>
                <motion.div  initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }} className='scroll'>
                <span>^^</span>
                <p>Scroll down for more info</p>
                <span>^^</span>
            </motion.div>
            <div className='wantBtn-Box'>
            <Btn text="Want?" emoji="🤩" />
            </div>
    </div>
    </div>
    );
}

export default ProductFlow;