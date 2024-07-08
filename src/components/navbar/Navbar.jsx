import React from "react";
import Logo from "../../assets/images/logo.svg";
import SignInModal from "./SignInModal";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActiveMainLink = (paths) => {
    return paths.some((path) => location.pathname === path);
  };

  return (
    <>
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
                <li
                  className={`dropdown nav-item ${
                    isActiveMainLink([
                      "/about-us",
                      "/contact-us",
                      "/blog",
                      "/blog-detail",
                      "/post-a-job",
                      "/faqs",
                      "/login",
                      "/register",
                      "/coming-soon",
                      "/404-error",
                      "/terms-and-conditions",
                    ])
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="#" className="nav-link" data-bs-toggle="dropdown">
                    Pages<i className="fas fa-chevron-down fa-xs"></i>
                  </a>
                  <ul className="dropdown-menu megamenu dropdown-menu-lg">
                    <li>
                      <div className="row">
                        <div className="col-sm-4 mb-2 mb-sm-0">
                          <h6 className="mb-3 nav-title">Pages</h6>
                          <ul className="list-unstyled mt-lg-3">
                            <li
                              className={
                                location.pathname === "/about-us"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/about-us">About</a>
                            </li>

                            <li
                              className={
                                location.pathname === "/contact-us"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/contact-us">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4 mb-2 mb-sm-0">
                          <h6 className="mb-3 nav-title">Pages</h6>
                          <ul className="list-unstyled mt-lg-3">
                            <li
                              className={
                                location.pathname === "/blog" ? "active" : ""
                              }
                            >
                              <a href="/blog">Blog</a>
                            </li>
                            <li
                              className={
                                location.pathname === "/blog-detail"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/blog-detail">Blog Detail</a>
                            </li>
                            <li
                              className={
                                location.pathname === "/post-a-job"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/post-a-job">Post a Job</a>
                            </li>
                            <li
                              className={
                                location.pathname === "/faqs" ? "active" : ""
                              }
                            >
                              <a href="/faqs">Faq</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <h6 className="mb-3 nav-title">Pages</h6>
                          <ul className="list-unstyled mt-lg-3">
                            <li
                              className={
                                location.pathname === "/login" ? "active" : ""
                              }
                            >
                              <a href="/login">Login</a>
                            </li>
                            <li
                              className={
                                location.pathname === "/register"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/register">Register</a>
                            </li>
                            <li
                              className={
                                location.pathname === "/coming-soon"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/coming-soon">Coming soon</a>
                            </li>
                            <li
                              className={
                                location.pathname === "/404-error"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/404-error">404 Error</a>
                            </li>
                            <li
                              className={
                                location.pathname === "/terms-and-conditions"
                                  ? "active"
                                  : ""
                              }
                            >
                              <a href="/terms-and-conditions">T&C</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item dropdown ${
                    isActiveMainLink([
                      "/job-grid",
                      "/job-listing",
                      "/job-detail",
                    ])
                      ? "active"
                      : ""
                  }`}
                >
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
                    <li
                      className={
                        location.pathname === "/job-grid" ? "active" : ""
                      }
                    >
                      <a className="dropdown-item" href="/job-grid">
                        Job Grid
                      </a>
                    </li>
                    <li
                      className={
                        location.pathname === "/job-listing" ? "active" : ""
                      }
                    >
                      <a className="dropdown-item" href="/job-listing">
                        Job Listing
                      </a>
                    </li>
                    <li
                      className={
                        location.pathname === "/job-detail" ? "active" : ""
                      }
                    >
                      <a className="dropdown-item" href="/job-detail">
                        Job Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item dropdown ${
                    isActiveMainLink([
                      "/candidate-detail",
                      "/dashboard-candidates",
                      "/dashboard-candidates/my-profile",
                      "/dashboard-candidates/change-password",
                      "/dashboard-candidates/my-resume",
                      "/dashboard-candidates/manage-jobs",
                      "/dashboard-candidates/saved-jobs",
                      "/dashboard-candidates/pricing",
                    ])
                      ? "active"
                      : ""
                  }`}
                >
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
                    <li
                      className={
                        location.pathname === "/candidate-detail"
                          ? "active"
                          : ""
                      }
                    >
                      <a className="dropdown-item" href="/candidate-detail">
                        Candidates detail
                      </a>
                    </li>
                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Dashboard <i className="fas fa-chevron-right fa-xs"></i>
                      </a>
                      <ul className="dropdown-menu left-side">
                        <li
                          className={
                            location.pathname === "/dashboard-candidates"
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            className="dropdown-item"
                            href="/dashboard-candidates"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname ===
                            "/dashboard-candidates/my-profile"
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            className="dropdown-item"
                            href="/dashboard-candidates/my-profile"
                          >
                            Profile
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname ===
                            "/dashboard-candidates/change-password"
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            className="dropdown-item"
                            href="/dashboard-candidates/change-password"
                          >
                            Change Password{" "}
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname ===
                            "/dashboard-candidates/my-resume"
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            className="dropdown-item"
                            href="/dashboard-candidates/my-resume"
                          >
                            My Resume
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname ===
                            "/dashboard-candidates/manage-jobs"
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            className="dropdown-item"
                            href="/dashboard-candidates/manage-jobs"
                          >
                            Manage Jobs
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname ===
                            "/dashboard-candidates/saved-jobs"
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            className="dropdown-item"
                            href="/dashboard-candidates/saved-jobs"
                          >
                            Saved Jobs
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname ===
                            "/dashboard-candidates/pricing"
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            className="dropdown-item"
                            href="/dashboard-candidates/pricing"
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
      <SignInModal />
    </>
  );
};

export default Navbar;
