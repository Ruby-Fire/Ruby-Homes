import "./PropertyType.css";
import styled from "styled-components";

const PropertyType = ({type , bgImage}) => {

    const Property = styled.div`
        border: 1px solid;
        width: 270px;
        height: 220px;
        border-radius: 10px;
        text-align: left;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: end;
        background-image: url("../../Assets/${bgImage}");

        p {
            font-size: 1.5rem;
            font-weight: 600;
        }

        span {
            font-size: 1rem;
            font-weight: 600;
        }
    `

    return ( 
        <Property bgImage={bgImage}>
            <p>{type}</p>
            <span>180 listings</span>
        </Property>
     );
}
 
export default PropertyType;