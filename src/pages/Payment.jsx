import React,  { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
// import Nav from '../components/Nav'
import sucess from './img/success-svgrepo-com.svg'
import './payment.scss'
import arrow from './img/arrow.svg'



const Payment = () => {

 
  const [isActive, setIsActive] = useState(true);
  const [isClicked, setIsClicked] = useState(true);
   const handleclicked = event =>{
    setIsClicked(false)
  }
  const handleClick = event => {
    // 👇️ toggle isActive state variable
    setIsActive(false);
  };
    const [searchparams] = useSearchParams();
    // console.log(`${searchparams.get("amountOfUnit")}`);
    // console.log(`${searchparams.get( "amountPerUnit")}`);
    // console.log(`${searchparams.get( "totalamount")}`);
  return (
    <div className='home-body'>
         {/* <Nav/> */}
         <Link to='/home'>
         <div className="arrow">
          <img src={arrow} alt="" />
         </div>
         </Link>
        <div className="payment-box">
            <div className="account" >
              <div className="details">You are to make payment of  :<span>&#x20A6;   {searchparams.get( "totalamount")}</span> </div>
              <div className="bank">first bank</div>    
              <div className="acct-name">ayotayo</div>
              <div className="bank-num">6986387523786</div>  
              <div className="paidd" onClick={handleClick}>
                  paid
              </div>                                            
            </div>
            <div className={isActive ? 'none' : 'pay'}>
             
                <div className={isClicked ? '' : 'none'}  >
                <div className="name">ayotayo badejo</div> 
                 <div className="amount"><span>&#x20A6; {searchparams.get( "totalamount")}</span></div>
                 <div className="">
                 <div className="upload" >upload a receipt below</div>
                 <div className="file-btn">
                 <input type="file" className="photo-input" style={{border:"3px solid white",padding:"10px", borderRadius:"4px",cursor:"pointer"}}/>
                 <div className="btns">
                  <div className={ 'submit-receipt' } onClick={handleclicked}>Submit</div>
                  
                 </div>
                 </div>
                 </div>
                 </div>
                 <div className={isClicked ? 'none' : 'sucess'}  >
                 <div className="name">Submitted<br />Sucessfully</div> 
                 <img src={sucess} alt="sucess" />
                 <div  className={'submit-receipt'} style={{backgroundColor:"white",color:" rgb(2, 77, 2)"}}>Download certificate</div>
                 </div>
                 {/* <div className="warning">Do not reload or exit this page</div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Payment