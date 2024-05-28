import React from 'react'
import Join from "../../Components/Join/Join";
import Faq from "../../Components/FAQ/Faq";
import BG from "../../assets/BG.png";
import "./faq.scss"

const FaqPage = () => {
  return (
    <div className="faq-container">
     <div className="circle-bg">
      <img src={BG} alt="" />
      </div>
    <Faq/>
    <Join/>
    </div>
  )
}

export default FaqPage