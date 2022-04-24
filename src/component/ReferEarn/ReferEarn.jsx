import React from 'react'
import Header from '../ProductsPage/Header'
import hero from "./img/hero.png"
import Information from './information'
import "./style/referandearn.css"
import money from "./img/money.png";
import mobile from "./img/mobile.png";
import head from "./img/head.png";
import moneyface from "./img/money-face.png"
import { motion } from 'framer-motion';
const ReferEarn = () => {
  return (
    <>
        <Header />
        <div>
          <div className='centera'>
        <h2 className='heading1'>Refer and Earn</h2>
        </div>
        <div className='centera'>
            <div className='animation'>
          <h3><motion.img src={moneyface} alt=",," initial={{scale: 0,rotate:-465}} animate={{scale: 1,rotate:0}} transition={{delay: 0.5}} /></h3>  
          <motion.p className='emogi1'initial={{scale: 0, x:110,y:100,rotate:-665}} animate={{scale: 1,x:0, y:0,rotate:6}} transition={{delay: 0.6}}>💞</motion.p>  
          <motion.p className='emogi2'initial={{scale: 0,x:-35,y:100,rotate:-665}} animate={{scale: 1,x:0, y:0,rotate:16}} transition={{delay: 0.7}}>💗</motion.p>       
          <motion.p className='emogi3'initial={{scale: 0,x:50,y:50,rotate:-665}} animate={{scale: 1,x:0, y:0,rotate:-18}} transition={{delay: 0.8}}>♥</motion.p>       
          <motion.p className='emogi4'initial={{scale: 0,x:130,y:20,rotate:-665}} animate={{scale: 1,x:0, y:0,rotate:-15}} transition={{delay: 0.8}}>💘</motion.p> 
          <motion.p className='emogi5'initial={{scale: 0,x:-130,y:40,rotate:-665}} animate={{scale: 1,x:0, y:0,rotate:2}} transition={{delay: 0.6}}>💖</motion.p>
          <motion.p className='emogi6'initial={{scale: 0,x:-40,rotate:-665}} animate={{scale: 1,x:0, y:0,rotate:14}} transition={{delay: 0.8}}>💌</motion.p>
          <motion.p className='emogi7'initial={{scale: 0,x:-150,rotate:-665}} animate={{scale: 1,x:0, y:0,rotate:16}} transition={{delay: 0.7}}>💟</motion.p>
          <motion.p className='emogi8'initial={{scale: 0,x:-10,y:-120,rotate:-465}} animate={{scale: 1,x:0, y:0,rotate:-15}} transition={{delay: 0.6}}>💝</motion.p>
          <motion.p className='emogi9'initial={{scale: 0,x:-70,y:-100,rotate:-465}} animate={{scale: 1,x:0, y:0,rotate:14}} transition={{delay: 0.8}}>❤</motion.p>
          <motion.p className='emogi10'initial={{scale: 0,x:60,y:-70,rotate:-465}} animate={{scale: 1,x:0, y:0,rotate:-25}} transition={{delay: 0.6}}>💕</motion.p>
          <motion.p className='emogi11'initial={{scale: 0,x:150,y:-120,rotate:-465}} animate={{scale: 1,x:0, y:0,rotate:-25}} transition={{delay: 0.7}}>💓</motion.p>

            </div>
        </div>
        <div className='centera'>
        <h2 className='heading2' >Share the love<br />and get 15 Credits!</h2> </div>

        <Information img={mobile} text="Invite your friends to join Pixetra" />
        <Information img={head} text="Your friend joins Pixetra to avail exciting discounts!" />
        <Information img={money} text="You and your friend both gets 50 credits!" />

        </div>
        <div className="love-box">
                <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay: 1}} className="love-btn">
                    <p className="blue-text"><span>💌</span> Share the love</p>
                </motion.div>
            </div>
    </>
  )
}

export default ReferEarn