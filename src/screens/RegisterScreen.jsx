import React from "react";
import InnerBanner from "../components/common/InnerBanner";
import AccountTypeNavTabs from "../components/login/AccountTypeNavTabs";
import CandidateRegisterTab from "../components/register/CandidateRegisterTab";
import EmployerResiterTab from "../components/register/EmployerResiterTab";
import OtherSignUpMethods from "../components/login/OtherSignUpMethods";

const RegisterScreen = () => {
  return (
    <>
      <InnerBanner
        primaryPageName={"Register"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
      />
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="login-register">
                <div className="section-title text-center center">
                  <h2 className="title">
                    <span>Create Your Account</span>
                  </h2>
                </div>
                <AccountTypeNavTabs
                  candidateDesc="I want to discover companies."
                  employerDesc="I want to attract the best talent."
                />

                <div className="tab-content">
                  <CandidateRegisterTab />
                  <EmployerResiterTab />
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

export default RegisterScreen;
