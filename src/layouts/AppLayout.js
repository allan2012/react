import {Link, useNavigate} from "react-router-dom";
import Navigation from "./partials/Navigation";
import React from 'react';
import {client} from "../lib/axiosInstance";
import {toast} from "react-toastify";

function AppLayout(props) {

  const navigate = useNavigate()

  const handleLogout = () => {
    client.get('/logout', {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      alert("We are here")
      //navigate('/')
    }).catch(error => {
      toast.error("Error signing out")
    })
  }

  return (
    <div className="main-wrapper doc-wrapper">
      <Navigation />
      <div className="page-container">
        <nav className="navbar nav-doc navbar-light bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <ul className="list-inline navbar-button p-0 m-0 ml-auto">
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <button type="button"
                    className="btn btn-light btn-round dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Welcome <i className="bi-person"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="bi-info"></i> About</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button onClick={() => handleLogout() } className="dropdown-item"><i className="bi-door-closed"></i> Logout</button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="page-content w-nav-right">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <h3 className="page-title">{props.title}</h3>
                <div className="row">
                  <div className="col-12">
                    {props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
