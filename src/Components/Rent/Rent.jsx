import React from 'react'
import './Rent.css'
import Results from '../SearchResults/Results'

function Rent() {
  return (
        <div>
            
            <div className='Main-container'>
                <div className='items-wrapper'>
                    <div className='check-board'>
                        <div className='destination'>
                             <label>destination</label>
                             <input type="text" />
                         </div>
                         <div className='general-detail'>
                             <div className='property-type' >
                                    <span>location</span>
                                    <input type="text" className='input-location' />
                             </div>
                             <div className='property-type'> 
                                    <span>Property type</span>
                                    <input type="text" className='input-location' />
                             </div>
                             <div className='property-type'>
                                    <span>Price Range</span>
                                    <input  type="text" className='input-location' />
                             </div>
                              <button>Search</button>
                         </div>
                    </div>
                    <div className='check-items'>
                        <Results />
                        <Results />
                        <Results />
                        <Results />
                        
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Rent
    //    <div className='ListContainer'>
    //        <div className='ListWrapper'>
    //            <div className='ListSearch'>
    //                     <div className='header'>
    //                         <label>destination</label>
    //                         <input type="text" />
    //                     </div>
    //            <div className='property-type'>
    //               <label className='label-id' >location</label>
    //                <input type="text" className='input-location' />
    //            </div>
    //            <div className='property-type'>
    //               <span className='span-id'>Property type</span>
    //                <input type="text" className='input-location' />
    //            </div>
    //            <div className='property-type'>
    //               <span className='span-id'>prince Range</span>
    //                <input type="text" className='input-location' />
    //            </div>
    //               <button>Search</button>
    //            </div>
    //            <div className='ListResult'>

    //            </div>
    //        </div>
    //    </div>