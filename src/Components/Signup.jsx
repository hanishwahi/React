import React,{ useState} from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const Navigate=useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const [data, setData] = useState('');
   const [cookies, setCookie] = useCookies(['user']);
   

   async function handleSubmit(e){
    e.preventDefault();
     const items={name, email,phone, password};

     const result= await fetch("https://api.awesmatic.com/api/customer/register",{
      method:'POST',
      body:JSON.stringify(items),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
      }).then((res)=>{
        res.json((resp)=>{
          console.log(resp);

        })
      });
  
         Navigate("/Login");

    setCookie('items', JSON.stringify([...data, items ]) )
    setData([...data, items]); 
  }
   
  return (
    <div>
    
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                      <label className="form-label" >Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email"  className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      <label className="form-label">Your Email</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="phone"  className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                      <label className="form-label" >Phone</label>
                    </div>
                  </div>
                 

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password"  className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                      <label className="form-label" >Password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={handleSubmit} className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Signup
