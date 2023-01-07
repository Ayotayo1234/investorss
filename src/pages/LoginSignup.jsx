import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './LoginSignup.scss';
import { createSearchParams, useNavigate } from 'react-router-dom';




const LoginSignup = () => {
  const [signUp, setSignUp] = useState(true)
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [upEmail, setupEmail] = useState('')
const [upPassword, setupPassword] = useState('')
const [phone, setphone] = useState('')
const [name, setname] = useState('')

  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()

  useEffect(()=>{
const auth = localStorage.getItem('user');
if(auth){
  navigate('./profile');
}
  })
  const handleClick = event => {
    // 👇️ toggle isActive state variable
    setIsActive(current => !current);
  };
  const handleLogin = async () => {
    const response = await axios.post('http://nupat-lms.alimisamuel.com/api/v1/auth/login', {
	email: email,
	password:password,
})

if(response.status === 201 ){
  localStorage.setItem('user', JSON.stringify(response.data))
  
  navigate({
    pathname: '/profile',
    search: createSearchParams({
       24746342: response.data.data.id
    }).toString()
})
  // navigate('./profile');
}else{
  console.log("bad")

}
  };
  const handleSignup = async () => {
    const response = await axios.post('http://nupat-lms.alimisamuel.com/api/v1/user/register', {
  email: upEmail,
	password:upPassword,
  phoneNo:phone,
  fullName:name,
})
console.log(response.status);
if(response.status === 201 ){
  localStorage.setItem('user', JSON.stringify(response))
  navigate('./profile');
}else{
  console.log("bad");
}
  };
  const handleNewSignup = event => {
    // 👇️ toggle isActive state variable
    setSignUp(!signUp);
  };

  
  return (
    <div className="body">
    <div  className={isActive ? 'cont s--signup' : 'cont'}>
      <div className="form sign-in">
        <h2>Welcome back,</h2>
        <label className="label">
          <span className="span">Email</span>
          <input className="input" type="email" 
          onChange={(e)=> setEmail(e.target.value)} 
          value={email}/>
        </label>
        <label className="label">
          <span className="span">Password</span>
          <input className="input" type="password" 
          onChange={(e)=> setPassword(e.target.value)} 
          value={password}/>
        </label>
        <p className="forgot-pass">Forgot password?</p>
        {/* <Link  to='/profile'> */}
          <button type="button" className="submit" onClick={handleLogin}>Sign In</button>
          {/* </Link> */}
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>If you already has an account, just sign in. We've missed you!</p>
          </div>
          <div className="img__btn"  onClick={handleClick}  >
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Time to feel like home,</h2>
          <label className="label">
            <span className="span">Full Name</span>
            <input className="input" type="text" onChange={(e)=> setname(e.target.value)} 
          value={name} />
          </label>
          <label className="label">
            <span className="span">Email</span>
            <input className="input" type="email" onChange={(e)=> setupEmail(e.target.value)} 
          value={upEmail}/>
          </label>
          <label className="label">
          <span className="span">Phone No</span>
          <input className="input" type="number" onChange={(e)=> setphone(e.target.value)} 
          value={phone}/>
        </label>
          <label className="label">
            <span className="span">Password</span>
            <input className="input" type="password" onChange={(e)=> setupPassword(e.target.value)} 
          value={upPassword}/>
          </label>
          <button type="button" className="submit" onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
    <div className="sec-auth">
    <div
    className={signUp ? 'sec-login' : 'none'}
    //  className="sec-login"
     >
        <h2>Welcome back,</h2>
        <label className="label">
          <span className="span">Email</span>
          <input className="input" type="email" 
          onChange={(e)=> setEmail(e.target.value)} 
          value={email}/>
        </label>
        <label className="label">
          <span className="span">Password</span>
          <input className="input" type="password" 
          onChange={(e)=> setPassword(e.target.value)} 
          value={password}/>
        </label>
        <p className="forgot-pass">Forgot password?</p>
        {/* <Link  to='/profile'> */}
          <button type="button" className="submit" onClick={handleLogin}>Sign In</button>
          {/* </Link> */}
          <div className="" onClick={handleNewSignup}>
            signup
          </div>
      </div>
      <div 
      className={signUp ? 'none' : 'sec-signup'}
      // className="sec-signup"
      >
          <h2>Time to feel like home,</h2>
          <label className="label">
            <span className="span">Full Name</span>
            <input className="input" type="text" onChange={(e)=> setname(e.target.value)} 
          value={name} />
          </label>
          <label className="label">
            <span className="span">Email</span>
            <input className="input" type="email" onChange={(e)=> setupEmail(e.target.value)} 
          value={upEmail}/>
          </label>
          <label className="label">
          <span className="span">Phone No</span>
          <input className="input" type="number" onChange={(e)=> setphone(e.target.value)} 
          value={phone}/>
        </label>
          <label className="label">
            <span className="span">Password</span>
            <input className="input" type="password" onChange={(e)=> setupPassword(e.target.value)} 
          value={upPassword}/>
          </label>
          <button type="button" className="submit" onClick={handleSignup}>Sign Up</button>
          <div className="" onClick={handleNewSignup}>
            sign-In
          </div>
        </div>
    </div>
    </div>
  )
}

export default LoginSignup