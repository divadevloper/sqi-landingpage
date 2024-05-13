import frameimg from "./image/college.jpg"
import frameimg2 from "./image/prof.jpg"
import frameimg3 from "./image/certificate.jpg"


function Sectiontwo() {
    return (

        <div className="Sectiontwo">
            <h2>Start here. Change the world.</h2>

            <div className="card-div">
                <div className="small-div">
                    <img src={frameimg} alt="" srcset="" />
                    <div className="nation">
                        <h3>National Innovative Diploma (NID)</h3>
                        <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
                    </div>
                    <div className="card-p">
                        <p>Learn More</p>
                    </div>
                </div>
                <div className="small-div">
                    <img src={frameimg2} alt="" />
                    <div className="nation">
                        <h3>Professional Diploma Certificate</h3>
                        <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
                    </div>
                    <div className="card-p">
                        <p>Learn More</p>
                    </div>
                </div>
                <div className="small-div">
                    <img src={frameimg3} alt="" />
                    <div className="nation">
                        <h3>Certificate Program</h3>
                        <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers</p>
                    </div>
                    <div className="card-p">
                        <p>Learn More</p>
                    </div>
                </div>
                
            </div>
                <div className="card-div">
                <div className="small-div1">
                    <h3>NATIONAL DIPLOMA COURSES</h3>
                    <p><strong>Duration:</strong> 2 Years</p>
                    <div className="line"></div>
                    <p><strong>Certificate: </strong>Both National Diploma and Professional Diploma.</p>
                    <div className="line"></div>
                    <p><strong>Skills:</strong> Academic Institution recognized skills and In-demand professional skills.</p>
                    <div className="line"></div>
                    <p><strong>Entry Requirements:</strong> 120 min in JAMB 5 Credits in O-Level, Your passion</p>
                    <div className="line"></div>
                    <p> <strong>Required Hardware: </strong>(usually Laptop)</p>
                    <div className="line"></div>
                    <p><strong>Direct Entry:</strong> Yes (Any University)</p>
                    <div className="line"></div>
                    <p><strong>Access to Alumni Network and Opportunities:</strong> Yes.</p>

                </div>
                <div className="small-div1">
                <h3>PROFESSIONAL DIPLOMA COURSES</h3>
                    <p><strong>Duration:</strong> 1 Years courses</p>
                    <div className="line"></div>
                    <p><strong>Certificate: </strong>Professional Diploma</p>
                    <div className="line"></div>
                    <p><strong>Skills:</strong> In-demand professional skills</p>
                    <div className="line"></div>
                    <p><strong>Entry Requirements:</strong> Your passion</p>
                    <div className="line"></div>
                    <p> <strong>Required Hardware: </strong>(usually Laptop)</p>
                    <div className="line"></div>
                    <p><strong>Direct Entry:</strong>  Partially Yes (LAUTECH ODL)</p>
                    <div className="line"></div>
                    <p><strong>Access to Alumni Network and Opportunities:</strong> Yes.</p>
                </div>
                <div className="small-div1">
                <h3>CERTIFICATE PROGRAM</h3>
                    <p><strong>Duration:</strong> 2 weeks to 6 months</p>
                    <div className="line"></div>
                    <p><strong>Certificate: </strong> Certificate Program</p>
                    <div className="line"></div>
                    <p><strong>Skills:</strong>  In-demand professional skills</p>
                    <div className="line"></div>
                    <p><strong>Entry Requirements:</strong>Your passion</p>
                    <div className="line"></div>
                    <p> <strong>Required Hardware: </strong>(usually Laptop)</p>
                    <div className="line"></div>
                    <p><strong>Direct Entry:</strong>No</p>
                    <div className="line"></div>
                    <p><strong>Access to Alumni Network and Opportunities:</strong> Yes.</p>
                </div>
                </div>
        </div>
    )
}
export default Sectiontwo