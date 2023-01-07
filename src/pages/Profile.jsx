import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Profile = () => {
    // console.log(JSON.parse(localStorage.getItem('user')).data.id);
  return (
   <div className='profile-full' style={{height:"100vh"}}>
   
     <div className="profile">
        <Nav/>
        <div className="infos">
            <div className="section-1">
            <div className="details">
                <div className="info">Shareholder</div>
                <div className="info-d">{JSON.parse(localStorage.getItem('user')).data.fullName}</div>
            </div>
            <div className="details">
                <div className="info">Number Shares </div>
                <div className="info-d">20%</div>
            </div>
            <div className="details">
                <div className="info">Payment Status</div>
                <div className="info-d">pending</div>
            </div>
            <div className="details">
                <div className="info">Certificate Number</div>
                <div className="info-d">875385348421</div>
            </div>
            <Link to="/home">
            <div className="button">
                Buy Shares
            </div>
            </Link>
            </div>
             {/* <div className="pics"><img src={profile} alt="" /></div> */}
        </div>
    </div>
   </div>
  )
}

export default Profile