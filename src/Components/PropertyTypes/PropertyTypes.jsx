import "./PropertyTypes.css";
import PropertyType from "../PropertyType/PropertyType";
import { Fade } from "react-awesome-reveal";

const PropertyTypes = () => {
    return ( 
        <div className="property-types">
            <h1>Types Of Property We Have</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut ea aperiam</h5>

            <Fade direction="up">
            <div className="property-container">
                <PropertyType 
                    type = "Apartment"
                    bgImage = "apartment.jpg"/>
                <PropertyType
                    type = "Home"
                    bgImage = ""/>
                <PropertyType
                    type = "Villa"
                    bgImage = ""/>
            </div>
            </Fade>
        </div>
     );
}
 
export default PropertyTypes;