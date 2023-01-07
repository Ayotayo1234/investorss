import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import "./Admin.scss"


const Admin = () => {
  const [users, setUsers] = useState([{}])
 
      const token = JSON.parse(localStorage.getItem('user')).token
  const handleLogin = async () => {
    const response = await axios.get('http://nupat-lms.alimisamuel.com/api/v1/user/getUsers', {
      headers: {
        'Authorization': `Bearer ${token}`

      }
    })
    setUsers(response.data.data)

  }
  useEffect(() => {
    handleLogin()
    })
  return (
        <div className="admin-body">
            <Nav />
            <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h6>Investors Table</h6>
              {/* <input
                 type="text"
                 placeholder='Search...'
                 style={{
                    border:"0.5px solid black",
                    borderRadius:"8px",
                    padding:"0 5px "
                 }}
                //  onChange={(e)=> setUs(e.target.value)}
                  /> */}
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Investors</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Unit</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                  { users.map(user=>(
                     <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            {/* <img src={img} alt="/" class="avatar avatar-sm me-3" /> */}
                       
                               
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{user.fullName}</h6>
                            <p class="text-xs text-secondary mb-0">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">30</p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm bg-gradient-success">Sucessful</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                      </td>
                      {/* <td class="align-middle">
                        <a href="/" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td> */}
                    </tr> 
                  ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Admin