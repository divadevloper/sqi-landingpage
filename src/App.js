import './App.css';
import frame from "./image/co.jpg"

function App() {
  return (
    <div className="App">
      <div className='div-image'>
        <img src={frame} alt="" />
      </div>
      <div className='atages'>
        <div className='ptag3'>
          <p>About</p>
          <i className="fa fa-angle-down"></i>
          <div className='dropdown'>
           <p>Our Story</p>
           <p>Our Team</p>
           <p>Campus info</p>
          </div>
        </div>
        <div className='ptag'>
          <p>Programmes</p>
          <i className="fa fa-angle-down"></i>
          <div className='dropdown2'>
           <p>National Innovation Diploma</p>
           <p>Professional Diploma Program</p>
           <p>Executive Professional Certificate Programme</p>
          </div>
        </div>
        <div className='ptag'>
          <p>Admissions</p>
          <i className="fa fa-angle-down"></i>
          <div className='dropdown2'>
           <p>Apply for a Programme</p>
           <p>Mode of Study</p>
           <p>Tuition</p>
           <p>Frequently Asked Questions</p>
          </div>
        </div>
        <div className='ptag'>
          <p>E-Portal</p>
          <i className="fa fa-angle-down"></i>
          <div className='dropdown1'>
           <p>Student</p>
           <p>Staff</p>
          </div>
        </div>
        <div className='ptag'>
          <p> SQI Scholarship </p>
        </div>
        <div className='ptag'>
          <p> News </p>
        </div>
      </div>
      <div className='barsicon'>
      <i className="fa fa-bars"></i>
      <div>
        
      </div>
      </div>
    </div>
  );
}

export default App;
