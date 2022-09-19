import "./Banner.css";
import SailLogo from "../../Assets/sail-logo.png";
import FindWorkaLogo from "../../Assets/findworka-logo.png";
import CCHubLogo from "../../Assets/cc-hub-logo.png";


const Banner = () => {
    return ( 
        <div className="banner">
            <div className="trusted">Trusted By: </div>
            <div>  
          
            <img src={SailLogo} alt="sail-logo"/>
            <img src={FindWorkaLogo} alt="sail-logo"/>
            <img src={CCHubLogo} alt="sail-logo"/>
            <img src={SailLogo} alt="sail-logo"/>
            <img src={CCHubLogo} alt="sail-logo"/>
            </div>
        </div>
     );
}
 
export default Banner;