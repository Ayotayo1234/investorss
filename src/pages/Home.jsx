import './LoginSignup.scss';
import './Home.scss';
import React, { useState } from 'react'
import { createSearchParams,  Link,  useNavigate } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
    const [unit, setUnit] = useState(0)
    const [amount] = useState(500)
    const [total, setTotal] = useState(0)
    const [name] = useState(JSON.parse(localStorage.getItem('user')).data.fullName)
    const navigate = useNavigate();

    const calculate = () => {
        const cat = unit* amount
        let comma = new Intl.NumberFormat('en-US', {

          
      });
       setTotal(comma.format(cat))

    }
    // calculate()
    // useEffect(() => {
    //   calculate()
    // }, [])
    const buy = async () => { 
      // const token = JSON.parse(localStorage.getItem('user')).token
      // console.log(token);
      const response = await axios.post(`http://nupat-lms.alimisamuel.com/api/v1/share/create-share/${JSON.parse(localStorage.getItem('user')).data.id}`, {
        name: name,
        unit: unit ,
        total: total,
 
      }
    )
    if(response.status === 201){
      navigate({
            pathname: '/payment',
            search: createSearchParams({
                amountOfUnit: unit,
                amountPerUnit: amount,
                totalamount: total
            }).toString()
        })

    }

       
    }
    
  return (
    <div>
        <div className='home-body'>
        {/* <Nav/> */}
      <div className="home-container">
      <div className="box">
      <div className="products">
          Unit available
        </div>
        <div className="product">
          1000 units
        </div>
       
       
      </div>
<div className="b-box">
   <Link to='/profile'><div className="btnnn">
     <div className="buy">Back &lt; &lt; </div>
      {/* <div className="sell">SELL</div> */}
  </div>
  </Link>
  <div className="content">
  <div className="content-div">
  <div className='content-label'>unit</div>
      <div className="inpit-icon">
      <input className='content-input'
                    name="discount1" 
                    // value={unit}
                    type="number"
                 onChange={(e)=> setUnit(e.target.value)}
                    placeholder='0.00000000' />
                    <div className="icon">
                      %
                    </div>
      </div>
    </div>
    <div className="content-div">
      <div className='content-label'>price</div>
      <div className="inpit-icon">
      <input className='content-input'
                    name="price" 
                    value={amount} 
                    readOnly={amount}
                    //  placeholder='0.00000000'
                      />
                     <div className="icon">&#x20A6;</div>
      </div>
    </div>
    <div className="calculate"  onClick={calculate} >Calculate</div>
    <div className="content-div">
    <div className='content-label'>Total</div>
      <div className='content-total'>&#x20A6; {total}</div>
      
    </div>
     <div className="buy-total" onClick={buy}>
      Buy
    </div>
  </div>
</div>
      </div>
</div>
    </div>
  )
}

export default Home

