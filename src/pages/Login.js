import loginLogo from '../assets/images/logos/logo3.png'
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import {Button} from "semantic-ui-react";

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmission = (event) => {
    event.preventDefault()

    if (email === 'allan.koskei@gmail.com' && password === 'vitamins') {
      navigate('/home')
    } else {
      toast.error("Error login! Incorrect username or password")
    }

  }

  return (
    <div className="container" style={{ marginTop: '15%'}}>
      <ToastContainer />
      <div className="row">
        <form onSubmit={handleFormSubmission}>
          <div className="col-lg-4 offset-lg-4 login-form">
            <div className="logo-container">
              <img src={loginLogo} className="logo mb-10" style={{height: "100px", width: "auto"}} alt="My app logo" />
            </div>
            <div className="mb-3">
              <label
                htmlFor="emailLoginInput"
                className="form-label">Email address</label>
              <input type="email"
                    className="form-control"
                    id="emailLoginInput"
                    placeholder="Enter email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordLoginInput"
                     className="form-label">Password</label>
              <input type="password"
                    className="form-control"
                    id="passwordLoginInput"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
            </div>
            <div className="d-grid gap-2">
              <Button primary type='submit'>Sign in</Button>
            </div>
        </div>
        </form>
      </div>
    </div>
  )
}
