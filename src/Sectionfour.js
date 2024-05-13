import google from "./image/google.png"
import interswi from "./image/Interswitch (1).png"
import andle from "./image/Andela-log-landscape-blue-400px.png"
import micro from "./image/Microsoft_logo.png"
import pay from "./image/Paystack.png"
import brew from "./image/brewery.png"
import wema from "./image/Wema-Bank-Logo.png"
import credit from "./image/clan-logo.png"
import edo from "./image/edozzier.png"
import money from "./image/moneymie.png"
import army from "./image/Nigerian_Army.png"
import alle from "./image/aella-credit.png"

function Sectionfour(params) {
    return(
        <div className="sectionfour">
            <h2>Our alumni work at world-class companies around the world including</h2>

            <div>
                <div className="logo-div">
                    <img src={google} alt="" />
                    <img src={interswi} alt="" />
                    <img src={andle} alt="" />
                    <img src={micro} alt="" />
                </div>

                <div className="logo-div">
                    <img src={pay} alt="" />
                    <img src={brew} alt="" />
                    <img src={wema} alt="" />
                    <img src={credit} alt="" />
                </div>

                <div className="logo-div">
                    <img src={edo} alt="" />
                    <img src={money} alt="" />
                    <img src={army} alt="" />
                    <img src={alle} alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default Sectionfour