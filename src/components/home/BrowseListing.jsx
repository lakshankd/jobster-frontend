import React from "react";
import Svg10 from "../../assets/images/svg/10.svg";
import Svg02 from "../../assets/images/svg/02.svg";
import Svg06 from "../../assets/images/svg/06.svg";
import Svg11 from "../../assets/images/svg/11.svg";
import Svg12 from "../../assets/images/svg/12.svg";
import Svg13 from "../../assets/images/svg/13.svg";
import Svg17 from "../../assets/images/svg/17.svg";
import Svg18 from "../../assets/images/svg/18.svg";
import Svg19 from "../../assets/images/svg/19.svg";

const BrowseListing = () => {
  return (
    <section className="space-ptb bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">
                <span> Browse Listing </span>
              </h2>
            </div>
            <div className="nav-tabs-style-02 d-flex border-0">
              <div className="mb-4 mb-md-0">
                <ul
                  className="nav nav-tabs justify-content-center d-flex"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="hot-jobs-tab"
                      data-bs-toggle="tab"
                      href="#hot-jobs"
                      role="tab"
                      aria-controls="hot-jobs"
                      aria-selected="true"
                    >
                      Hot Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="recent-jobs-tab"
                      data-bs-toggle="tab"
                      href="#recent-jobs"
                      role="tab"
                      aria-controls="recent-jobs"
                      aria-selected="false"
                    >
                      Recent Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="popular-jobs-tab"
                      data-bs-toggle="tab"
                      href="#popular-jobs"
                      role="tab"
                      aria-controls="popular-jobs"
                      aria-selected="false"
                    >
                      Popular Jobs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="job-found ms-auto mb-0">
                <span className="badge badge-lg bg-primary">24123</span>
                <h6 className="ms-3 mb-0">Job Found</h6>
              </div>
            </div>

            <div className="tab-content" id="myTabContent">
              {/* <!-- Hot jobs --> */}
              <div
                className="tab-pane fade show active"
                id="hot-jobs"
                role="tabpanel"
                aria-labelledby="hot-jobs-tab"
              >
                {/* <!-- Freelance --> */}
                <div className="job-list">
                  <div className="job-list-logo">
                    <img className="img-fluid" src={Svg10} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">Graphic Design courses</a>
                        </h5>
                        <span className="freelance">Freelance</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">Trout Design Ltd</a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>
                            Parsippany, NJ 07054
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>Accountancy
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>3H ago
                    </span>
                  </div>
                </div>
                {/* <!-- Part-Time --> */}
                <div className="job-list">
                  <div className="job-list-logo">
                    <img className="img-fluid" src={Svg02} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">Adobe Photoshop courses</a>
                        </h5>
                        <span className="part-time">Part-Time</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              Adobe Photoshop courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>Glen
                            Cove, NY 11542
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>IT Contractor
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>4D ago
                    </span>
                  </div>
                </div>
                {/* <!-- Temporary --> */}
                <div className="job-list">
                  <div className=" job-list-logo">
                    <img className="img-fluid" src={Svg06} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">Group Marketing Manager</a>
                        </h5>
                        <span className="temporary">Temporary</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              Marvelous Designer courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>
                            Minneapolis, MN 55406
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>Finance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>10W ago
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Recent jobs --> */}
              <div
                className="tab-pane fade"
                id="recent-jobs"
                role="tabpanel"
                aria-labelledby="recent-jobs-tab"
              >
                {/* <!-- Freelance --> */}
                <div className="job-list">
                  <div className="job-list-logo">
                    <img className="img-fluid" src={Svg11} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">
                            Toon Boom Harmony courses
                          </a>
                        </h5>
                        <span className="freelance">Freelance</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              Toon Boom Harmony courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>
                            Parsippany, NJ 07054
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>Accountancy
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>6H ago
                    </span>
                  </div>
                </div>
                {/* <!-- Part-Time --> */}
                <div className="job-list">
                  <div className="job-list-logo">
                    <img className="img-fluid" src={Svg12} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">
                            Senior Rolling Stock Technician
                          </a>
                        </h5>
                        <span className="part-time">Part-Time</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              {" "}
                              Adobe Photoshop courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>Glen
                            Cove, NY 11542
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>IT Contractor
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>9D ago
                    </span>
                  </div>
                </div>
                {/* <!-- Temporary --> */}
                <div className="job-list">
                  <div className=" job-list-logo">
                    <img className="img-fluid" src={Svg13} alt="" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">
                            Marketing & Business courses
                          </a>
                        </h5>
                        <span className="temporary">Temporary</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              {" "}
                              Marvelous Designer courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>
                            Minneapolis, MN 55406
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>Finance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>5W ago
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Popular jobs --> */}
              <div
                className="tab-pane fade"
                id="popular-jobs"
                role="tabpanel"
                aria-labelledby="popular-jobs-tab"
              >
                {/* <!-- Freelance --> */}
                <div className="job-list">
                  <div className="job-list-logo">
                    <img className="img-fluid" src={Svg17} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">
                            Anticoagulation Receptionist
                          </a>
                        </h5>
                        <span className="freelance">Freelance</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              Toon Boom Harmony courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>
                            Parsippany, NJ 07054
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>Accountancy
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>4H ago
                    </span>
                  </div>
                </div>
                {/* <!-- Part-Time --> */}
                <div className="job-list">
                  <div className="job-list-logo">
                    <img className="img-fluid" src={Svg18} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">
                            Receptionist Office Administrator
                          </a>
                        </h5>
                        <span className="part-time">Part-Time</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              {" "}
                              Adobe Photoshop courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>Glen
                            Cove, NY 11542
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>IT Contractor
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>8D ago
                    </span>
                  </div>
                </div>
                {/* <!-- Temporary --> */}
                <div className="job-list">
                  <div className=" job-list-logo">
                    <img className="img-fluid" src={Svg19} alt="img" />
                  </div>
                  <div className="job-list-details">
                    <div className="job-list-info">
                      <div className="job-list-title">
                        <h5 className="mb-0">
                          <a href="job-detail.html">
                            Data Entry - Advanced Google Software
                          </a>
                        </h5>
                        <span className="temporary">Temporary</span>
                      </div>
                      <div className="job-list-option">
                        <ul className="list-unstyled">
                          <li>
                            <span>via</span>
                            <a href="employer-detail.html">
                              Marvelous Designer courses
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt pe-1"></i>
                            Minneapolis, MN 55406
                          </li>
                          <li>
                            <i className="fas fa-filter pe-1"></i>Finance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="job-list-favourite-time">
                    <a className="job-list-favourite order-2" href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    <span className="job-list-time order-1">
                      <i className="far fa-clock pe-1"></i>1W ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 justify-content-center d-flex mt-4">
                  <a className="btn btn-white btn-lg" href="#">
                    View More Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseListing;
