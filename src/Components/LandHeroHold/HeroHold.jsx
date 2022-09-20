import './HeroHold.css';
import Home from '../../Assets/home.jpg'

const Landlord = () => {

    return ( 
        <div className="HeroHold">
            <div className="HerolHolder">
                <div className="TextHold">
                    <div className="TextHolder">
                    <h1>Become a RubyRealty Host today and start earning now</h1>
                    <button>Get Started</button>
                    </div>
                </div>
                <div className="ImageHold">
                    <img src={Home} alt="" />
                </div>
            </div>
        </div>
        
     );
}

 
export default Landlord;