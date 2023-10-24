import AppLayout from "../layouts/AppLayout";
import {useState} from "react";
import React from 'react';

export default function Forms() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [about, setAbout] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Form submitted successfully: ' + name + '|' + email + '|' + dateOfBirth + '|' + about)
  }

  return (
    <AppLayout title="Form Processing">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Full names</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of birth</label>
              <input
                type="date"
                className="form-control"
                value={dateOfBirth}
                onChange={e => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">About yourself</label>
              <textarea
                className="form-control"
                id="about"
                rows="3" value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>
          <div className="col-lg-4">
            <table className="table table-striped">
              <tr>
                <td>Full names</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Date of birth</td>
                <td>{dateOfBirth}</td>
              </tr>
              <tr>
                <td>About</td>
                <td>{about}</td>
              </tr>
            </table>
          </div>
        </div>
      </form>
    </AppLayout>
  )
}
