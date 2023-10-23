import logo from "../../assets/images/logo-light.png";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav doc-side-navbar nav-inverse">
      <div className="navbar-collapse collapse show" id="navbar-toggle">
        <ul className="p-0 m-0" id="main-collapse">
          <li className="sidenavbar-logo">
            <a href="index.html">
              <img src={logo} alt=""/>
            </a>
          </li>

          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" href="credits.html">
              <i className="bi-house"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/forms" className="nav-link" href="changelog.html">
              <i className="bi-textarea-resize"></i>
              <span>Forms</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-upload"></i>
              <span>File Uploader</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-caret-right"></i>
              <span>Data Pagination</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-graph-up"></i>
              <span>Graphs</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-body-text"></i>
              <span>Content Rendering</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-exclamation-triangle"></i>
              <span>Alerts</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-back"></i>
              <span>Modals</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-filetype-js"></i>
              <span>Ajax Tricks</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="changelog.html">
              <i className="bi-segmented-nav"></i>
              <span>Tabs</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
