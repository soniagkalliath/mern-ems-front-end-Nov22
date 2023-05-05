import React from 'react';
import './Home.css';
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hometable from '../../Components/HomeTable/Hometable';

function Home() {
  const navigate = useNavigate()

  const adduser = ()=>{
    //navigate to register page
    navigate('/register')
  }
  return (
    <>
    
      <div className='container mt-5'>
        
        <div className="first_div">
            {/* search btn , add employee */}
            <div className="search_Add d-flex justify-content-between">
              <div className="search col-md-4">
                  <Form className='d-flex'>
                    <Form.Control type="text" placeholder="Search" className='me-2' />
                    <Button variant='primary'>Search</Button>
                  </Form>
              </div>
              <div className="add_btn">
              <Button onClick={adduser} variant='success'> <i className="fa-solid fa-user-plus"></i> Add</Button>
              </div>
            </div>
        </div>

        <div className="second_div">
          {/* table */}
          <Hometable/>
        </div>

      </div>
    </>
  )
}

export default Home