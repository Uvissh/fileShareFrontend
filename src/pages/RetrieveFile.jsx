import axios from "axios";
import {  useState } from "react";
import "./Retrieve.css";
import api from "../api";



function RetrieveFile(){

  
    const[retriveData,setRetriveData] = useState('');
    const[code,setCode] = useState();
     
    
    
    const getRetrieveFile = async()=>{
        const token = localStorage.getItem("token");
const response = await api.get(`/${code}`)


console.log(response.data.data);
        setRetriveData(response.data.data);


    }
  

    return(

      <div className="retrieve-page">
         <div className="retrieve-card">
              <div className="retrieve-header">
                 <div className="retrieve-icon"> 🔍 </div>
                  <h1>Retrieve File</h1>
                   <p> Enter the share code to view your file. </p>
                    </div> 
                     <div className="retrieve-form">
                         <input type="text" placeholder="Enter your share code" value={code} onChange={(e) => setCode(e.target.value)} />
                          <button onClick={getRetrieveFile} disabled={!code} > Retrieve File </button>
                           </div>  {retriveData && ( <div className="retrieved-file">
                             <h2>Retrieved File</h2>  {retriveData.resource_type === "image" && ( <img src={retriveData.file_url} alt="Retrieved file" /> )} 
                             {retriveData.resource_type === "video" && ( <video controls> <source src={retriveData.file_url} /> Your browser does not support video. </video> )} 
                              {retriveData.format === "pdf" && ( <iframe src={retriveData.file_url} title="Retrieved PDF" /> )}
                               {retriveData.resource_type !== "image" && retriveData.resource_type !== "video" && retriveData.format !== "pdf" && ( <a href={retriveData.file_url} target="_blank" rel="noreferrer" > Open File </a> )} </div> )} 
                               </div> 
                               </div>
    )
}
export default RetrieveFile;