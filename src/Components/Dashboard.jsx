import React, {useState, useEffect } from 'react'
import axios from 'axios';


function Dashboard() {
    const [user, setUser] = useState('')

    useEffect(() => {
        let headers={'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjM0MTgzYzRmYWFhODI0YTE2MDI3ZTJiZmRiMTJkNTE0YzY0NjM4NTRlOGQyN2Q0OWRiMGI4YWQyMDhmNWQxNTM4N2ZhYWNmZjUxOTYyYjUiLCJpYXQiOjE2ODExOTkzNjMuMjAxNjY3LCJuYmYiOjE2ODExOTkzNjMuMjAxNjcsImV4cCI6MTY4Mzc5MTM2My4xOTc0MjgsInN1YiI6IjUxIiwic2NvcGVzIjpbXX0.wIUtX0k5QWoWUSi_v_3WsDsh8GywxSlGQTQ-bqfGxUZzog8GNRTJ_YnSsVax-DXEq1DYDrrobcGix7B82EjaI75JiqE_L5cXHWJ6XXqW1EL8-IfcLgHNmQD2x-VY5qVQ5v61d_-VFvWN4bZ2BumgcbFMoI28RrojcmoTAmRmHS2PvM0Od27sR90DJqwWNSfktdz5S_0iHitbsF8p386EdZRn5oKJuv_Z5Ry7Z_MtRheue0V6xsrcbDatR7YUeWgnDj2pUv7zdL53C4f_7OrLMHNPd7jjWmDHn0oqSFoTivnwW0dmrCQyjhOnNBUqa0KCfZWDx0xm7sVzZJZ6uEI-q1Q0gCywmaqBZGludHNI6HIZDtI-TJbzDchyjy8QnGfTTzuQYdMEy02wDToYNrSUiCDX3PFBU81vgbgAyaH4mg-80jHdOyE-lYyv1qTJfhmu_V5z_jPJQkSFGYVYJWVmZXCJ2EwZoteNVkHZhB2njoyFlo1a8OMoN8pAPVjEzfNVm3znUJ5IGtuqEiXDtMr1HYZ9EIx8Ca2P8iov5d84E6VNbHD1T8Juie83VV0hmNJgTD7JACtJq0gGusEeABXHPWy08pvuPJE_WlKjsAUILa1nc9DcCZMzRc2Bh7Nmibr-RWLNIWcOGHCmYLvn5pTVXJIVRZQprY3AC8A-ljm9O7M'};
    
        axios.get('https://api/customer/get_customer_details', { headers })
        .then((res)=>{
            res.json((resp)=>{
              setUser(resp)
            })
    
        })   
       
    
    }, [])
    console.log(user)

    


  return (
    <div>
      <h1> Welcome to dashboard</h1>
    </div>
  )
}

export default Dashboard
