import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <Link to="/"><h1>RUBYREALTY</h1></Link>
            <div className="nav-list">
                <Link to="/rent">Rent</Link>
                <Link to="/landlord">For Landlords</Link>
                
            </div>
            <div className="nav-buttons">
                <Link to="/register"><button className="register">Register</button></Link>
                <Link to="/Login"><button className="sign-in">Sign in</button></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;