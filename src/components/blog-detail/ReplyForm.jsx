import React from "react";

const ReplyForm = () => {
  return (
    <div className="mt-4">
      <h5 className="mb-4">Leave a Reply</h5>
      <form>
        <div className="row g-2">
          <div className="mb-2 col-md-6">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-2 col-md-6">
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-2 col-12">
            <input
              type="text"
              className="form-control"
              id="Website"
              placeholder="Website"
            />
          </div>
          <div className="mb-2 col-md-12">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className=" mb-2 col-md-12">
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
              />
              <label
                className="custom-control-label form-check-label pe-5"
                htmlFor="customCheck1"
              >
                I consent to having this website store my submitted information
                so they can respond to my inquiry.
              </label>
            </div>
          </div>
          <div className="col-md-12 mt-0">
            <a className="btn btn-primary" href="#">
              Send Message
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;
