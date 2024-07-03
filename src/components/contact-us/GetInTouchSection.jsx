import React from "react";

const GetInTouchSection = () => {
  return (
    <section className="space-pb ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="feature-info-02 text-start p-4 border">
              <div className="feature-info-icon">
                <i className="flaticon-hand-shake"></i>
              </div>
              <div className="feature-info-content ps-0 ps-sm-3">
                <h5 className="title text-dark">Chat To Us Online</h5>
                <p className="mb-0">
                  Chat to us online if you have any question.
                </p>
                <a className="mt-2 mb-0 d-block" href="#">
                  Click here to open chat
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="feature-info-02 text-start p-4 border">
              <div className="feature-info-icon">
                <i className="flaticon-profiles"></i>
              </div>
              <div className="feature-info-content ps-0 ps-sm-3">
                <h5>Call Us</h5>
                <p className="mb-0">
                  Our support agent will work with you to meet your lending.
                </p>
                <h5 className="mt-2 mb-0">(123) 345-6789</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-info-02 text-start p-4 border">
              <div className="feature-info-icon">
                <i className="flaticon-conversation-1"></i>
              </div>
              <div className="feature-info-content ps-0 ps-sm-3">
                <h5>Read our latest news</h5>
                <p className="mb-0">
                  Visit our Blog page and know more about news.
                </p>
                <a className="mt-2 mb-0 d-block" href="#">
                  Read Blog post{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
