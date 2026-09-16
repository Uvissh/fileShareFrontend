import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  "./Login.css"


function Login(){
    const[email,setEmail] = useState("radha12@gmail.com");
    const[password,setPassword] = useState("Radha@12345");
    const  navigate = useNavigate()

    const handelLogin =async()=>{
        const response =  await axios.post('https://filesharing-1-ksam.onrender.com/login',{
            email:email,
            password:password
        })
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token",token);
        navigate('/')
        
    }

    return(
<div className="login-page">

    <div className="login-card">

        <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Login to your FileShare account</p>
        </div>

        <div className="login-form">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handelLogin}>
                Login
            </button>
        </div>

        <div className="register-section">
            <p>
                Don't have an account?
                <Link to="/register"> Register</Link>
            </p>
        </div>

    </div>

</div>

    )
}
export default Login;