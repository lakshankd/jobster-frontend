import React from "react";
import InnerBanner from "../components/common/InnerBanner";
import AccountTypeNavTabs from "../components/login/AccountTypeNavTabs";
import CandidateTab from "../components/login/CandidateTab";
import EmployerTab from "../components/login/EmployerTab";
import OtherSignUpMethods from "../components/login/OtherSignUpMethods";

const LoginScreen = () => {
  return (
    <>
      <InnerBanner
        primaryPageName={"Login"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
      />
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="login-register">
                <div className="section-title center text-center">
                  <h2 className="title">
                    <span>Login to Your Account</span>
                  </h2>
                </div>
                <AccountTypeNavTabs />
                <div className="tab-content">
                  <CandidateTab />
                  <EmployerTab />
                </div>
                <div className="mt-4">
                  <OtherSignUpMethods />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginScreen;
