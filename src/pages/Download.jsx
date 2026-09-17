
import { useState } from "react";
import "./Download.css"
import api from "../api";

function Download(){
    const[data,SetData] = useState();
  
const[code,SetCode] = useState();
    const DownloadFile =async()=>{
         const response =  await api.get(`/download/${code}`,{
         
             responseType:"blob"
         })
          const userID = await api.get(`/profile`)
          console.log("UserID",userID.data.data.id);
          
          
          

         const url  = window.URL.createObjectURL(response.data);
const link =  document.createElement('a');
link.href = url;
link.download = `${userID.data.data.id}_download-file`
link.click();
window.URL.revokeObjectURL(url);
         console.log(response.data);
         SetData(response.data);
         
    }

    
   
   
    return(


        <>
  <div className="download-page">
     <div className="download-card">
         <div className="download-header">
             <div className="download-icon">📥
                </div> <h1>Download File</h1>
                 <p> Enter the share code to download your file. </p> 
                 </div> <div className="download-form">
                     <input type="text" placeholder="Enter your share code" value={code} onChange={(e) => SetCode(e.target.value)} />
                      <button onClick={DownloadFile}> Download </button> </div> </div> </div>
       
            
        </>
    )
}

export default  Download;