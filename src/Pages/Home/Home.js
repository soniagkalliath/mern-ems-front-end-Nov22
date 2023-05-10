import React,{useState,useEffect, useContext} from 'react';
import './Home.css';
import { Form,Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hometable from '../../Components/HomeTable/Hometable';
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner';
import { addData } from '../../Components/contexts/ContextShare';

function Home() {
  const navigate = useNavigate()
  //get data from register page
  const {useradd,setUserAdd} = useContext(addData)
  console.log(useradd);
  //spinner state
  const [showSpin,setShowSpin]= useState(true)
  const adduser = ()=>{
    //navigate to register page
    navigate('/register')
  }

  useEffect(()=>{
    setTimeout(() => {
      setShowSpin(false)
    }, 2000);
  },[])

  return (
    <>
    {
      useradd?<Alert variant="success" onClose={() => setUserAdd("")} dismissible>
          {useradd.fname.toUpperCase()} Successfully Registered....
      </Alert>:""
    }
    
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
          {
            showSpin ? 
            <div className='d-flex justify-content-center mt-5'> <LoadingSpinner/> </div> :  <Hometable/>
          }
        </div>

      </div>
    </>
  )
}

export default Home