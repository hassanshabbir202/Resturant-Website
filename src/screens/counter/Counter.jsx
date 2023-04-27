import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import "../counter/Counter.scss"

const Counter = () => {
    
    const [counterOn,setCounterOn] = useState(false);

  return (
    <div className='mainCounterContainer'>
      <div className="firstCounter">
        <div className="firstIcon">
            <p><EmojiEmotionsIcon style={{fontSize:"42px", color:"#816712"}}/></p>
        </div>
        <div className="firstCount">
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <h1> {counterOn && <CountUp start={0} end={2000} duration={2} delay={0}/>}<span style={{color:"#816712"}}>+</span></h1>
            </ScrollTrigger>
        </div>
        <div className="firstText">
            <p  style={{color:"#816712"}}>HAPPY CLIENTS</p>
        </div>
      </div>
      <div className="secondCounter">
        <div className="secondIcon">
            <p><ThumbUpAltIcon  style={{fontSize:"42px", color:"#816712"}}/></p>
        </div>
        <div className="secondCount">
            <ScrollTrigger>
            <h1> {counterOn && <CountUp start={0} end={5000} duration={2} delay={0}/>}<span style={{color:"#816712"}}>+</span></h1>
            </ScrollTrigger>
        </div>
        <div className="secondText">
            <p  style={{color:"#816712"}}>GOOD EXPERIENCE</p>
        </div>
      </div>
      <div className="thirdCounter">
        <div className="thirdIcon">
            <p><AccountBalanceWalletIcon style={{fontSize:"42px", color:"#816712"}}/></p>
        </div>
        <div className="thirdCount">
            <ScrollTrigger>
            <h1> {counterOn && <CountUp start={0} end={8000} duration={2} delay={0}/>}<span style={{color:"#816712"}}>+</span></h1>
            </ScrollTrigger>
        </div>
        <div className="thirdText">
            <p  style={{color:"#816712"}}>ONLINE PAYNMENT</p>
        </div>
      </div>
      <div className="fourthCounter">
        <div className="fourthIcon">
            <p><HighQualityIcon style={{fontSize:"42px" , color:"#816712"}}/></p>
        </div>
        <div className="fourthCount">
            <ScrollTrigger>    
            <h1> {counterOn && <CountUp start={0} end={10000} duration={2} delay={0}/>}<span style={{color:"#816712"}}>+</span></h1>
            </ScrollTrigger>
        </div>
        <div className="fourthText">
            <p  style={{color:"#816712"}}>ALL ITEMS GOOD</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
