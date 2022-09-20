import './WhyHost.css'
import {FaWallet} from 'react-icons/fa'
import {ImStarEmpty} from 'react-icons/im'
import {RiKeyFill} from 'react-icons/ri'
import {TbFileSpreadsheet} from 'react-icons/tb'

const WhyHost = () => {
  return (
    <div className="WhyHold">
        <div className="WhyHolder">
            <div className="WhyTop">
                <h2>Why host on RubyRealty ?</h2>
                <h1>Let your space work for you.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus magnam debitis doloremque ut ipsa qui aliquam, temporibus similique consequatur tempora officiis eligendi explicabo excepturi cupiditate eius fugit ex. Quasi, ut!</p>
            </div>
        </div>
        <div className="Sect">
            <div className="FirstSect">
                <div className="Sect1">
                    <FaWallet size={70}/>
                    <h2>Earn money from your space</h2>
                    <p>Turn your space into an additional income stream.</p>
                </div>
                <div className="Sect1">
                    <RiKeyFill size={70}/>
                    <h2>Screened Renters Profiles</h2>
                    <p>Our potential renters undergo extensive & rigorous screening procedures.</p>
                </div>
            </div>
            <div className="FirstSect">
                <div className="Sect1">
                    <TbFileSpreadsheet size={70}/>
                    <h2>Eliminate agent and legal hassels</h2>
                    <p>List your space on RubyRealty, sit back and enjoy your earnings.</p>
                </div>
                <div className="Sect1">
                    <ImStarEmpty size={70}/>
                    <h2>Keep your space pristine</h2>
                    <p>Enjoy maintenance support for all occupied spaces 24/7.</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default WhyHost