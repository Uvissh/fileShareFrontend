
import { useEffect, useState } from "react";
import "./Profile.css";
import api from "../api";

function Profile(){
    const[profile,setProfile] = useState();
    

    const getProfile = async()=>{
        const token = localStorage.getItem("token");
        const response = await api.get(`/profile`)
        
        console.log(response.data.data);
        setProfile(response.data.data);
        
    }
    useEffect(()=>{
        getProfile();
    },[]);

    return (
        <div className="profile-page"> 
        <div className="profile-card">
             <div className="profile-header"> 
                <div className="profile-avatar"> 👤 </div>
                 <h1>My Profile</h1> 
                 <p>Your FileShare account information</p>
                  </div> {profile && ( <div className="profile-info"> 
                    <div className="profile-item"> 
                        <span>Name</span> <strong>{profile.name}</strong> </div>
                         <div className="profile-item"> <span>Email</span>
                          <strong>{profile.email}</strong> </div>
                           <div className="profile-item"> 
                            <span>User ID</span> 
                            
                            <strong>{profile.id}</strong> 
                            </div> 
                            </div> )} </div>
                             </div>
        
    )
}
export default Profile;