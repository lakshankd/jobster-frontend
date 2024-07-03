import React from "react";

const ContactForm = () => {
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">
                    <span>Let’s Get In Touch!</span>
                  </h2>
                  <p>
                    We have completed over a 1000+ projects for five hundred
                    clients. Give us your next project.
                  </p>
                </div>
              </div>
            </div>
            <form>
              <div className="row g-2">
                <div className="mb-2 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-2 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-2 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="Password"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="mb-2 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="col-12 mb-0">
                  <textarea
                    rows="5"
                    className="form-control"
                    id="sector"
                    placeholder="Subject"
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  <a className="btn btn-primary" href="#">
                    Send your message
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-6 mt-4 mt-xl-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">
                    <span>Contact information</span>
                  </h2>
                  <p>
                    How can we motivate ourselves? One of the most difficult
                    aspects of achieving success is staying motivated over the
                    long haul.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="border d-flex align-items-center p-4">
                  <i className="text-primary flaticon-placeholder me-3 fa-3x"></i>
                  <div>
                    <h5 className="mb-2">Address</h5>
                    <span className="d-block">214 West Arnold St. </span>
                    <span>New York, NY 10002</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="border d-flex align-items-center p-4">
                  <i className="text-primary flaticon-contact me-3 fa-3x"></i>
                  <div>
                    <h5 className="mb-2">Phone Number</h5>
                    <span className="d-block">(123) 345-6789</span>
                    <span>(456) 478-2589</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="border d-flex align-items-center p-4">
                  <i className="text-primary flaticon-approval me-3 fa-3x"></i>
                  <div>
                    <h5 className="mb-2">Email</h5>
                    <span className="d-block">support@jobster.demo</span>
                    <span>gethelp@jobster.demo</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border d-flex align-items-center p-4">
                  <i className="text-primary flaticon-contact me-3 fa-3x"></i>
                  <div>
                    <h5 className="mb-2">Fax</h5>
                    <span className="d-block">(123) 345-6789</span>
                    <span>(456) 478-2589</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
