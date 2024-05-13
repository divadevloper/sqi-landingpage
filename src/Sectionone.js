import frame1 from "./image/bg-header-sqi-1.png"


function Sectionone() {
    return(
        <div className="Sectionone">
            <div className="side-icon">
                <ul>
                    <li><i class="fa fa-facebook"></i></li>
                    <li><i class="fa fa-twitter"></i></li>
                    <li><i class="fa fa-linkedin"></i></li>
                </ul>
            </div>
            <div className="word">
                <h1>Study to become a global talent</h1>
                <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
                <button className="button"> Start Now</button>
            </div>
            <div className="frame-image">
                <img src={frame1} alt="" />
            </div>

        </div>
    )
}

export default Sectionone