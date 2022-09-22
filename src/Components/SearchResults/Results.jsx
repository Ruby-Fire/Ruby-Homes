import React from 'react'
import './Results.css'
import apartment from '../../Assets/apartment.jpg'
import {Link} from "react-router-dom";
import Booking from './Booking';


function Results(props) {
  return (
    <div>
        <div className='results-review'>
            <img src='' alt="" className='imgSelector' /> 
            <div className='detail'>
                <h1 className='title'> Tower Street Apartments</h1>
                <p className='hours'>500m for center</p>
                <h4 className='apartment'>Studio apartment with Air conditioning</h4>
                <p className='Available-aparments'>Entire studio . 1 bathroom . 21m 1 full bed</p>
                <h3 className='price-tag'> $112</h3>
                <Link to="/Booking"><button className='ReBtn'> see availabity</button></Link>
            </div>

        </div>
    </div>
  )
}

export default Results