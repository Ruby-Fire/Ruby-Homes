import HeroSection from "./HeroSection/HeroSection";
import PropertyTypes from "./PropertyTypes/PropertyTypes";
import Steps from "./Steps/Steps";
import Reviews from "./Reviews";
import Footer from "./Footer";

const Home = () => {
    return ( 
        <div>
            <HeroSection/>
            <Steps/>
            <PropertyTypes/>
            <Reviews/>
            <Footer/>
        </div>
     );
}
 
export default Home;