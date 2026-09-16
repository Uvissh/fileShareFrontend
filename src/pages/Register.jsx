import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css"

function Register() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState("radha12@gmail.com");
   const [password, setPassword] = useState("Radha@12345");
   const navigate = useNavigate();

   const handelRegister = async () => {
      const response = await axios.post('https://filesharing-1-ksam.onrender.com/register', {
         name: name,
         email: email,
         password: password
      })
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate('/');


   }

   return (
      <div className="register-page">
         <div className="register-card"> 
       <div className="register-header">
          <h1>Create Account</h1> 
          <p>Register for your FileShare account</p>
           </div> 
           <div className="register-form">
             <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handelRegister}> Register </button> </div> <div className="login-section">
                   <p> Already have an account? <a href="/login"> Login</a> </p> 
                   </div>
                    </div>
                     </div>

   )
}
export default Register;