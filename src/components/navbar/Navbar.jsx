import React from "react";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="header header-default">
      <nav className="navbar navbar-static-top navbar-expand-lg navbar-light header-sticky">
        <div className="container-fluid">
          <button
            id="nav-icon4"
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a className="navbar-brand" href="/">
            <img className="img-fluid" src={Logo} alt="logo" />
          </a>
          <div className="navbar-collapse collapse justify-content-start">
            <ul className="nav navbar-nav">
              <li className="nav-item dropdown active">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home<i className="fas fa-chevron-down fa-xs"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="active">
                    <a className="dropdown-item" href="/">
                      index Default{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                  Pages<i className="fas fa-chevron-down fa-xs"></i>
                </a>
                <ul className="dropdown-menu megamenu dropdown-menu-lg">
                  <li>
                    <div className="row">
                      <div className="col-sm-4 mb-2 mb-sm-0">
                        <h6 className="mb-3 nav-title">Pages</h6>
                        <ul className="list-unstyled mt-lg-3">
                          <li>
                            <a href="/about-us">About</a>
                          </li>

                          <li>
                            <a href="/contact-us">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4 mb-2 mb-sm-0">
                        <h6 className="mb-3 nav-title">Pages</h6>
                        <ul className="list-unstyled mt-lg-3">
                          <li>
                            <a href="/blog">Blog</a>
                          </li>
                          <li>
                            <a href="/blog-detail">Blog Detail</a>
                          </li>
                          <li>
                            <a href="/post-a-job">Post a Job</a>
                          </li>
                          <li>
                            <a href="/faqs">Faq</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <h6 className="mb-3 nav-title">Pages</h6>
                        <ul className="list-unstyled mt-lg-3">
                          <li>
                            <a href="/login">Login</a>
                          </li>
                          <li>
                            <a href="/register">Register</a>
                          </li>
                          <li>
                            <a href="/coming-soon">Coming soon</a>
                          </li>
                          <li>
                            <a href="/404-error">404 Error</a>
                          </li>
                          <li>
                            <a href="/terms-and-conditions">T&C</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Listing <i className="fas fa-chevron-down fa-xs"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/job-grid">
                      Job Grid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/job-listing">
                      Job Listing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/job-detail">
                      Job Detail
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Employer <i className="fas fa-chevron-down fa-xs"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="employer-grid.html">
                      Employer Grid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="employer-listing.html">
                      Employer list
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="employer-masonry.html">
                      Employer Masonry
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="employer-detail.html">
                      Employer detail
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="employer-listing-map.html"
                    >
                      Employer Listing Map
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Dashboard <i className="fas fa-chevron-right fa-xs"></i>
                    </a>
                    <ul className="dropdown-menu left-side">
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-employer.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-employer-my-profile.html"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-employer-change-password.html"
                        >
                          Change Password{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-employer-manage-candidates.html"
                        >
                          Manage Candidates
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-employer-manage-jobs.html"
                        >
                          Manage Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-employer-post-new-job.html"
                        >
                          Post New Job
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-employer-pricing.html"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Candidates <i className="fas fa-chevron-down fa-xs"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Dashboard <i className="fas fa-chevron-right fa-xs"></i>
                    </a>
                    <ul className="dropdown-menu left-side">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dashboard-candidates"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dashboard-candidates-my-profile"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dashboard-candidates-change-password"
                        >
                          Change Password{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dashboard-candidates-my-resume"
                        >
                          My Resume
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dashboard-candidates-manage-jobs"
                        >
                          Manage Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dashboard-candidates-saved-jobs"
                        >
                          Saved Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dashboard-candidates-pricing"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="add-listing">
            <div className="login d-inline-block me-4">
              <a
                href="/login"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                <i className="far fa-user pe-2"></i>Sign in
              </a>
            </div>
            <a className="btn btn-primary btn-md" href="/post-a-job">
              Post a job
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
