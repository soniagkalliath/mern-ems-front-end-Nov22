import React from 'react';
import './Register.css';
import { Card, Form ,Row,Button } from 'react-bootstrap';
import Select from 'react-select';

function Register() {

  const option= [
    {value:'Active', label:'Active'},
    {value:'InActive', label:'InActive'}
  ]
  return (
    <>
      <div className="container mt-5">
          <h2 className="text-center mt-3">Register Employee Details</h2>
          <Card className='shadow mt-3 p-3'>
              <div className="text-center mb-3">
                <img className=" border p-1 rounded-circle" width={'50px'} height={'50px'} src="http://fc01.deviantart.net/fs71/f/2012/029/f/1/user_icom_by_adeptusmagos-d4o017u.png" alt="profile picture" />
              </div>
              <Form>
                  <Row>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name='fname' placeholder="First Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name='lname' placeholder="Last Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Email Address" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" name='mobile' placeholder="Mobile" />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                    <Form.Label>Select Gender</Form.Label>
                    <Form.Check
                      type={"radio"}
                      label={"Male"}
                      name="gender"
                      value={"Male"}
                    />
                    <Form.Check
                      type={"radio"}
                      label={"Female"}
                      name="gender"
                      value={"Female"}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                    <Form.Label>Select Employee Status</Form.Label>
                    <Select options={option}></Select>
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicpic">
                    <Form.Label>Choose Profile Picture</Form.Label>
                    <Form.Control type="file" name='user_profile'  />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicloc">
                    <Form.Label>Enter Employee Location</Form.Label>
                    <Form.Control type="text" name='location' placeholder="Enter Employee Location" />
                  </Form.Group>
                  <Button className='mt-3' variant='primary' type='submit'>Submit</Button>
                  </Row>
              </Form>
          </Card>
      </div>
    </>
  )
}

export default Register