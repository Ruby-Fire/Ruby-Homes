import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import PropertyTypes from "./PropertyTypes/PropertyTypes";
import Steps from "./Steps/Steps";
import Footer from "./Footer";

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <HeroSection/>
            <PropertyTypes/>
            <Steps/>
            <Footer/>
        </div>
     );
}
 
export default Home;