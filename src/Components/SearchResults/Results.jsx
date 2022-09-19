import React from 'react'
import './Results.css'


function Results(props) {
  return (
    <div>
        <div className='resuits-review'>
            <img src='' alt="" className='imgSelector' />
            <div className='detail'>
                <h1 className='title'> Tower street Apartments</h1>
                <p className='hours'>500m for center</p>
                <h4 className='aparament'>studio apartment with Air conditioning</h4>
                <p className='Available-aparments'>Entire studio . 1 bathroom . 21m 1 full bed</p>
                <h3 className='price-tag'> $112</h3>
                <h4 className='price-range'>so lock in this great price today</h4>
                <button className='ReBtn'> see availabity</button>
                
            
            </div>

        </div>
    </div>
  )
}

export default Results