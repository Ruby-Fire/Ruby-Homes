import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import PropertyTypes from "./PropertyTypes/PropertyTypes";;

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <HeroSection/>
            <PropertyTypes/>
        </div>
     );
}
 
export default Home;