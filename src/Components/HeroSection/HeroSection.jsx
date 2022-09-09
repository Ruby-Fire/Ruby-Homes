import "./HeroSection.css";
import SearchBox from "../SearchBox/SearchBox";

const HeroSection = () => {
    return ( 
        <div>
            <div className="container">
                <div>
                    <div className="about">
                        <div className="about-text">
                            <h1>
                                Buy or Rent your dream home at the best price.
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Aspernatur minus, et rem quae saepe dicta, exercitationem 
                                fuga in labore, quibusdam dolore ullam fugit. Necessitatibus, 
                                amet ut eius libero a praesentium.</p>
                        </div>

                        <div className="img-section">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <SearchBox/>
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;