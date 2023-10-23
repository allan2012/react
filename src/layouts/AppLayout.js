import {Link} from "react-router-dom";
import Navigation from "./partials/Navigation";

function AppLayout({children}) {
  return (
    <div className="main-wrapper doc-wrapper">
      <Navigation />
      <div className="page-container">
        <nav className="navbar nav-doc navbar-light bg-white">
          <div className="container-fluid">
            <button onClick="navMobile()" type="button" className="navbar-toggler mobile-nav-toggler">
              <span className="nav-link main-nav-link first-link">
                <i className="bi-list fs-28 va-middle"></i>
              </span>
            </button>
            <ul className="list-inline navbar-button p-0 m-0 ml-auto">
              <li className="nav-item">
                <div className="btn-group">
                  <button type="button" class="btn btn-light btn-round dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Welcome <i className="bi-person"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="bi-info"></i> About</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to='/' className="dropdown-item" href="#"><i className="bi-door-closed"></i> Logout</Link></li>
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
                <h4 className="page-title">Getting Started</h4>

                <div className="row">
                  <div className="col-12">
                    {children}
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
