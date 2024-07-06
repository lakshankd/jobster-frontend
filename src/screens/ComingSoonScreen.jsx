import React from "react";
import BgImg02 from "../assets/images/bg/02.png";
import ComingSoonFollowUs from "../components/coming-soon/ComingSoonFollowUs";

const ComingSoonScreen = () => {
  return (
    <section
      className="space-ptb bg-holder coming-soon h-100vh"
      style={{ backgroundImage: `url(${BgImg02})` }}
    >
      <div className="container h-100">
        <div className="row h-100 text-center justify-content-center">
          <div className="col-lg-7 col-md-9 align-self-center">
            <h1>Coming Soon</h1>
            <p className="mb-4">
              We are currently working on a website and won't take long.
            </p>
            <div className="countdown">
              <span className="theme-color days">00</span>
              <p className="days_ref">days</p>
            </div>
            <div className="countdown">
              <span className="theme-color hours">00</span>
              <p className="hours_ref">hours</p>
            </div>
            <div className="countdown">
              <span className="theme-color minutes">00</span>
              <p className="minutes_ref">minutes</p>
            </div>
            <div className="countdown">
              <span className="theme-color seconds">00</span>
              <p className="seconds_ref">seconds</p>
            </div>
            <div className="mt-4 mt-md-5">
              <h6 className=" mb-4">
                Provide your email address & we will notify you when site is
                ready:
              </h6>
              <div className="newsletter">
                <form>
                  <div className="mb-0">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Get Notified
                  </button>
                </form>
              </div>
            </div>
            <ComingSoonFollowUs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonScreen;
