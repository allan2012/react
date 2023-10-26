import loginLogo from '../assets/images/logos/logo10.png'
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmission = (event) => {
    event.preventDefault()

    if (email === 'allan.koskei@gmail.com' && password === 'vitamins') {
      navigate('/dashboard')
    } else {
      alert("Oops! Login failed")
    }

  }

  return (
    <div className="container" style={{ marginTop: '15%'}}>
      <div className="row">
        <form onSubmit={handleFormSubmission}>
          <div className="col-lg-4 offset-lg-4 login-form">
            <div className="logo-container">
              <img src={loginLogo} className="logo" alt="My app logo" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailLoginInput" className="form-label">Email address</label>
              <input type="email"
                    className="form-control"
                    id="emailLoginInput"
                    placeholder="Enter email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordLoginInput" className="form-label">Password</label>
              <input type="password"
                    className="form-control"
                    id="passwordLoginInput"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-block" type='submit'>Sign in</button>
            </div>
        </div>
        </form>
      </div>
    </div>
  )
}
