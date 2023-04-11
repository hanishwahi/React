import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';




function Login() {
  const Navigate=useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  

function handleLogin(){

  let item={email, password}
  let result= fetch('https://api.awesmatic.com/api/customer/login', {
    method:'POST',
    body:JSON.stringify(item),
    headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
    }
    })
    Navigate("/Dashboard");
    console.log(result)
 };


  return (
    <div>
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt=""/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          

          <div class="text-center text-lg-start mt-4 pt-2">
            <button onClick={handleLogin} type="button" class="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/Signup"
                class="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    </div>
  )
}

export default Login
