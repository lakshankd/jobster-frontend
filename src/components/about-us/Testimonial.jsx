import React from "react";
import Avatar01 from "../../assets/images/avatar/01.jpg";
import Avatar02 from "../../assets/images/avatar/02.jpg";
import Avatar04 from "../../assets/images/avatar/04.jpg";

const Testimonial = () => {
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="section-title center">
              <h2 className="title">
                <span>What Our Happy Clients say about us</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div
              className="owl-carousel owl-nav-bottom-center testimonial-style-02"
              data-nav-arrow="false"
              data-items="2"
              data-md-items="1"
              data-sm-items="1"
              data-xs-items="1"
              data-xx-items="1"
              data-space="30"
              data-autoheight="true"
            >
              <div className="item">
                <div className="testimonial-content">
                  <p>
                    <i className="fas fa-quote-left quotes"></i>The Jobster
                    database has been one of our current sources for
                    recruitment, backed by a very experienced team who would go
                    out of their way to make sure that requests are taken ahead.{" "}
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar avatar avatar-xl">
                    <img
                      className="img-fluid rounded-circle"
                      src={Avatar01}
                      alt="profile-img"
                    />
                  </div>
                  <div className="testimonial-name">
                    <h6 className="mb-1">Michael Bean</h6>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-content">
                  <p>
                    <i className="fas fa-quote-left quotes"></i>Portal is very
                    user-friendly in terms of searching for resumes and job
                    postings. Also, they have an excellent database to search
                    for resumes. As far as services are involved, it's terrific!{" "}
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar avatar avatar-xl">
                    <img
                      className="img-fluid rounded-circle"
                      src={Avatar02}
                      alt="profile-img"
                    />
                  </div>
                  <div className="testimonial-name">
                    <h6 className="mb-1">Anne Smith</h6>
                    <span>Project Manager</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-content">
                  <p>
                    <i className="fas fa-quote-left quotes"></i>Jobster is an
                    excellent job portal. We value the resumes received through
                    this channel. Magic Search and Power search are handy tools.
                    We are delighted with their service.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar avatar avatar-xl">
                    <img
                      className="img-fluid rounded-circle"
                      src={Avatar04}
                      alt="profile-img"
                    />
                  </div>
                  <div className="testimonial-name">
                    <h6 className="mb-1">Vickie Meyer</h6>
                    <span>Product Designer</span>
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

export default Testimonial;
