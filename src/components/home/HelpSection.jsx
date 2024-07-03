import React from "react";

const HelpSection = () => {
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center text-center">
              <h2 className="title">
                <span>Need Any Help?</span>
              </h2>
              <p>
                It really comes down to understanding the steps in the process
                and then executing on those steps.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="border h-100 p-lg-5 p-4">
              <i className="text-primary flaticon-conversation-1 fa-4x"></i>
              <h4 className="mt-4">Chat To Us Online</h4>
              <p>Chat to us online if you have any question.</p>
              <a className="mt-2 mb-0 d-block" href="#">
                {" "}
                Click here to open chat{" "}
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="border h-100 p-lg-5 p-4">
              <i className="text-primary flaticon-contact fa-flip-horizontal fa-4x"></i>
              <h4 className="mt-4">Call Us</h4>
              <p>
                Our support agent will work with you to meet your lending needs.
              </p>
              <h5 className="mt-2 mb-0">
                <a href="tel:123-345-6789">(123) 345-6789</a>
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border h-100 p-lg-5 p-4">
              <i className="text-primary flaticon-conversation-1 fa-4x"></i>
              <h4 className="mt-4">Read Our Latest News</h4>
              <p>
                Visit our Blog page and know more about news and career tips
              </p>
              <a className="mt-2 mb-0 d-block" href="#">
                {" "}
                Read Blog Post{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
