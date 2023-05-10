import React,{useState,useEffect} from 'react';
import './Profile.css';
import { Card,Row } from 'react-bootstrap';
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner';

function Profile() {
   //spinner state
   const [showSpin,setShowSpin]= useState(true)

   useEffect(()=>{
    setTimeout(() => {
      setShowSpin(false)
    }, 2000);
  },[])

  return (
    <>
{
  showSpin ?             <div className='d-flex justify-content-center mt-5'> <LoadingSpinner/> </div> :  
      <div className="container">
        <Card className='shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
                <div className="col">
                  <div className="profile_img d-flex justify-content-center">
                    <img className=" border p-1 rounded-circle" width={'200px'} height={'200px'} src="http://fc01.deviantart.net/fs71/f/2012/029/f/1/user_icom_by_adeptusmagos-d4o017u.png" alt="profile picture" />
                  </div>
                </div>
            </Row>
            <div className="text-center mt-3">
              <h3>Max Miller</h3>
              <h5> <i className="fa-solid fa-envelope text-primary"></i>:- <span>max@gmail.com</span> </h5>
              <h5> <i class="fa-solid fa-mobile text-warning"></i>:- <span>9876543212</span> </h5>
              <h5> <i class="fa-solid fa-venus-mars text-info"></i>:- <span>Male</span> </h5>
              <h5> <i class="fa-solid fa-location-dot text-danger"></i>:- <span>Brooklyn</span> </h5>
              <h5> <i class="fa-solid fa-chart-line text-success"></i>:- <span>Active</span> </h5>

            </div>
          </Card.Body>

        </Card>
      </div>
}
    </>
  )
}

export default Profile