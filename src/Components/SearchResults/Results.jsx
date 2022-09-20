import React from 'react'
import './Results.css'
import apartment from '../../Assets/apartment.jpg'


function Results(props) {
  return (
    <div>
        <div className='resuits-review'>
            <img src={apartment} alt="" className='imgSelector' />
            <div className='detail'>
                <h1 className='title'> Tower Street Apartments</h1>
                <p className='hours'>500m for center</p>
                <h4 className='aparament'>Studio Apartment with Air conditioning</h4>
                <p className='Available-aparments'>Entire studio . 1 bathroom . 21m 1 full bed</p>
                <h3 className='price-tag'> $112</h3>
                <h4 className='price-range'>So lock in this great price today</h4>
                <button className='ReBtn'> See availabity</button>
                
            
            </div>

        </div>
    </div>
  )
}

export default Results