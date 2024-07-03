import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 mt-lg-0">
            <div className="footer-contact-info">
              <h5 className="text-dark mb-4">Contact Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  {" "}
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span>214 West Arnold St. New York, NY 10002</span>{" "}
                </li>
                <li>
                  {" "}
                  <i className="fas fa-mobile-alt text-primary"></i>
                  <span>+(123) 345-6789</span>{" "}
                </li>
                <li>
                  {" "}
                  <i className="far fa-envelope text-primary"></i>
                  <span>support@jobster.demo</span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h5 className="text-dark mb-4">Trending job</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Browse Jobs</a>
                </li>
                <li>
                  <a href="#">Browse Categories</a>
                </li>
                <li>
                  <a href="#">Submit Resume</a>
                </li>
                <li>
                  <a href="dashboard-candidates.html">Candidate Dashboard</a>
                </li>
                <li>
                  <a href="#">Job Alerts</a>
                </li>
                <li>
                  <a href="#">My Bookmarks</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="footer-link">
              <h5 className="text-dark mb-4">Trending Companies</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Shortcodes</a>
                </li>
                <li>
                  <a href="#">Job Page</a>
                </li>
                <li>
                  <a href="#">Job Page Alternative</a>
                </li>
                <li>
                  <a href="#">Resume Page</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <h5 className="text-dark mb-4">Subscribe Us</h5>
            <div className="footer-subscribe">
              <p>
                Sign Up to our Newsletter to get the latest news and offers.
              </p>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-md">
                  Get Notified
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=================================
  Action box & Counter --> */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-sm-5 mb-lg-0">
              <div className="d-sm-flex">
                <div className="align-self-center footer-top-logo">
                  <img
                    className="img-fluid"
                    src="images/logo-dark.svg"
                    alt=""
                  />
                </div>
                <div className="ps-sm-3 ms-sm-3 mt-3 mt-sm-0 border-sm-start ">
                  Create a free account to find thousands of Jobs, Employment &
                  Career Opportunities around you!
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-4">
                  <div className="counter mb-4 mb-sm-0">
                    <div className="counter-icon">
                      <i className="flaticon-contract"></i>
                    </div>
                    <div className="counter-content">
                      <span
                        className="timer mb-1 text-dark"
                        data-to="1049"
                        data-speed="10000"
                      >
                        1049
                      </span>
                      <label className="mb-0">Jobs Posted</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="counter mb-4 mb-sm-0">
                    <div className="counter-icon">
                      <i className="flaticon-job-3"></i>
                    </div>
                    <div className="counter-content">
                      <span
                        className="timer mb-1 text-dark"
                        data-to="123"
                        data-speed="10000"
                      >
                        123
                      </span>
                      <label className="mb-0">Jobs Filled</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="counter">
                    <div className="counter-icon">
                      <i className="flaticon-apartment"></i>
                    </div>
                    <div className="counter-content">
                      <span
                        className="timer mb-1 text-dark"
                        data-to="240"
                        data-speed="10000"
                      >
                        240
                      </span>
                      <label className="mb-0">Companies</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--=================================
  Action box & Counter --> */}
      <div className="footer-bottom bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="d-flex justify-content-md-start justify-content-center">
                <ul className="list-unstyled d-flex mb-0">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
              <p className="mb-0 text-white">
                {" "}
                &copy;Copyright{" "}
                <span id="copyright">
                  {" "}
                  <script>
                    document.getElementById('copyright').appendChild(document.createTextNode(new
                    Date().getFullYear()))
                  </script>
                </span>{" "}
                <a href="#"> Jobster </a> All Rights Reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
