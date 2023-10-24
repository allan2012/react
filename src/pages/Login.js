import loginLogo from '../assets/images/logos/logo10.png'
import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="row">
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordLoginInput" className="form-label">Password</label>
            <input type="password"
                   className="form-control"
                   id="passwordLoginInput"/>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-block" onClick={() => navigate('/dashboard')}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}
