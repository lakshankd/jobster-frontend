import React from "react";
import ErrorImg from "../assets/images/error-img.png";
import BackToTop from "../components/common/BackToTop";

const ErrorPage = () => {
  return (
    <>
      <div className="header-inner bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-primary">404 Error</h2>
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  {" "}
                  <i className="fas fa-chevron-right"></i>{" "}
                  <span>404 Error</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img className="img-fluid" src={ErrorImg} alt="error-img" />
            </div>
            <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 text-center">
              <div id="notfound">
                <div className="notfound">
                  <div className="notfound-404">
                    <h1 className="text-primary">Oops!</h1>
                  </div>
                  <h2>404 - Page not found</h2>
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </p>
                  <a className="btn btn-primary" href="/">
                    Go To Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  );
};

export default ErrorPage;
