
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const  navigate = useNavigate();
    const token  = localStorage.getItem("token");
    const logout =()=>{
        localStorage.removeItem("token");
        navigate("/login");
        

    }
    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                FileShare
            </Link>

            <div className="navbar-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/uploads">
                    Upload
                </Link>

                <Link to="/retrieve">
                    Retrieve
                </Link>

                <Link to="/download">
                    Download
                </Link>

                <Link to="/profile">
                    Profile
                </Link>

                 
                {token?<button onClick={logout} className="logout">Logout</button>:<Link to="/login">
                    Login
                </Link>}  
                


            </div>

        </nav>
    );
}

export default Navbar;

