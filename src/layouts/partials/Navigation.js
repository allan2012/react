import logo from "../../assets/images/logo-light.png";
import {Link} from "react-router-dom";
import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav doc-side-navbar nav-inverse">
      <div className="navbar-collapse collapse show" id="navbar-toggle">
        <ul className="p-0 m-0" id="main-collapse">
          <li className="sidenavbar-logo">
            <Link to="/">
              <img src={logo} alt=""/>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <i className="bi-house"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/forms" className="nav-link">
              <i className="bi-textarea-resize"></i>
              <span>Forms</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link">
              <i className="bi-upload"></i>
              <span>File Uploader</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link">
              <i className="bi-caret-right"></i>
              <span>Data Pagination</span>
            </a>
          </li>

          <li className="nav-item">
            <Link to="/charts" className="nav-link">
              <i className="bi-graph-up"></i>
              <span>Charts</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href='#'>
              <i className="bi-body-text"></i>
              <span>Content</span>
            </a>
          </li>

          <li className="nav-item">
            <Link to='/alerts' className="nav-link">
              <i className="bi-exclamation-triangle"></i>
              <span>Alerts</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#'>
              <i className="bi-back"></i>
              <span>Modals</span>
            </a>
          </li>

          <li className="nav-item">
            <Link to="/search" className="nav-link">
              <i className="bi-filetype-js"></i>
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
