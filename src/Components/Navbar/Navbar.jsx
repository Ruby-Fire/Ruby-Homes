import "./Navbar.css";

const Navbar = () => {
    return ( 
        <nav>
            <h1>RUBYHOMES</h1>
            <div className="nav-list">
                <a href="#">Rent</a>
                <a href="#">For Landlords</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="nav-buttons">
                <button className="register">Register</button>
                <button className="sign-in">Sign in</button>
            </div>
        </nav>
     );
}
 
export default Navbar;