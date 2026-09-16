import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css"
import api from "../api";



function Upload(){
    const[file,setFile] = useState(null);
    const [dataCode,setDataCode] = useState('');
     const navigate = useNavigate();
    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    }
    

    const uploadData = async()=>{
        try{
 
        const formData = new FormData();
        formData.append("uploadfile", file);//fieldname,actualfile
        const token = localStorage.getItem("token");

        const response  = await api.post("/uploads",
             formData) 
        
           console.log(response.data.share_code);
           const share_code = response.data.share_code;
        //   navigate(`/retrieve/${share_code}`);
          setDataCode(share_code);

    }catch(error){
        console.log("ERROR:", error);
        console.log("STATUS:", error.response?.status);
        console.log("SERVER RESPONSE:", error.response?.data);
    }
}

 



    return(
       <div className="upload-page">
         <div className="upload-card">
             <div className="upload-header">
                 <div className="upload-icon"> 📤 </div>
                  <h1>Upload File</h1> 
                  <p> Upload your file and generate a share code. </p> 
                  </div> <div className="upload-form">
                     <label htmlFor="file"> Choose a file </label>
                      <input id="file" type="file" name="myfile1" onChange={handleFileChange} /> 
                      <button onClick={uploadData} disabled={!file} > Upload File </button>
                       </div> {dataCode && ( <div className="share-code"> <p>Your Share Code</p>
                        <h2>{dataCode}</h2> <span> Share this code with the person you want to send the file to. </span> </div> )}
                         </div>
                          </div>
    )
}
export default Upload;