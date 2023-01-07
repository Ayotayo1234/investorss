import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './nav.css'


const Nav = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleclicked = event =>{
    const admin = JSON.parse(localStorage.getItem('user')).data.isAdmin;
    
      setIsAdmin(admin)
  }
    useEffect(() => {
      handleclicked()
    }, [])
    const handleActive = event => {
      setIsActive(true);
    };
    const handleUnactive = event => {
      setIsActive(false);
    };

  return (
    <div className="">
      <div className={isActive ? 'none' : 'ham'} onClick={handleActive}>
      <svg viewBox="0 0 100 80" width="25" height="25">
  <rect width="90" height="7"></rect>
  <rect y="30" width="90" height="7"></rect>
  <rect y="60" width="90" height="7"></rect>
</svg>
      </div>
      
    <div onClick={handleUnactive}
    className={isActive ? 'nav-close' : 'nav'}
    //  className="nav nav-close"
     >
      <div style={{display:"flex", marginRight:"20px"}} className="close">
             <div className="logo"> </div></div>
             <div className=""><Link  to='/profile'>Profile</Link></div>
             <div  className={isAdmin ? '' : 'none'}><Link to='/admin'>Dashboard</Link></div>
            <div className=""><Link  to='/'>Logout</Link></div>
            
           
    </div>
    </div>
  )
}

export default Nav