import { Link } from "react-router-dom";
import "./Dashboard.css"

function Dashboard(){
    
    return(
        <div className="dashboard">
           
            
            <main className="dashboard-content">
                <div className="welcome">
                    <h1>Share files Easily</h1>
                    <p>
                        upload,share and download your files using a simple share code.
                    </p>
                </div>
                <div className="cards">
                    <Link to="/uploads" className="card">
                    <div className="card-icon">📤</div>
                    <h2>Upload file</h2>
                    <p>
                        Upload an image ,documentor other fiel and generte a share code
                    </p>
                
                    </Link>

                    <Link to = "/retrieve" className="card">
                    <div className="card-icon">🔍</div>
                    <h2>Retrieve File</h2>
                    <p>Enter a share code to view the shared file</p>
                    </Link>
                    <Link to="/download" className="card">
                    <div className="card-icon">📥</div>
                    <h2>Download File</h2>
                    <p>
                        Enter a share code and download the file.
                    </p>
                    </Link>
                </div>
            </main>
           
            
        </div>
    )
}
export default Dashboard;