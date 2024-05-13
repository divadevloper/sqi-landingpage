import sqiimage from "./image/co.jpg"
import powered from "./image/powered_by_google_on_white.png"

function Sectionsix(params) {
    return(

        <div className="sectionsix">
          <div className="testmonie">
          <h2>Testimonials</h2>
          <p>Read what our current students and alumni have to say about their SQI experience.</p>
          </div>

          <div className="reviews">
            <div className="reviews-inner">
                <div className="sqi-div">
                    <img src={sqiimage} alt="" />
                    <p>SQI College of ICT IBADAN</p>
                    <div className="star-div">
                        <span>4.9</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p>Based on Reviews</p>

                    </div>
                    <img className="powerwded" src={powered} alt="" />
                </div>

                <div className="reviewers">
                <div className="sqi-div">
                    <img src={sqiimage} alt="" />
                    <p>SQI College of ICT IBADAN</p>
                    <div className="star-div">
                        <span>4.9</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p>Based on Reviews</p>

                    </div>
                    <img className="powerwded" src={powered} alt="" />
                </div>
                <div className="sqi-div">
                    <img src={sqiimage} alt="" />
                    <p>SQI College of ICT IBADAN</p>
                    <div className="star-div">
                        <span>4.9</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p>Based on Reviews</p>

                    </div>
                    <img className="powerwded" src={powered} alt="" />
                </div>
                <div className="sqi-div">
                    <img src={sqiimage} alt="" />
                    <p>SQI College of ICT IBADAN</p>
                    <div className="star-div">
                        <span>4.9</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p>Based on Reviews</p>

                    </div>
                    <img className="powerwded" src={powered} alt="" />
                </div>
                </div>
                
            
            </div>
          </div>
        </div>
    )
}
export default Sectionsix