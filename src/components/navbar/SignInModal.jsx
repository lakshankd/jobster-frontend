import React from "react";
import AccountType from "./sign-in-modal/AccountType";
import CandidateSignInForm from "./sign-in-modal/CandidateSignInForm";
import EmployerSignInForm from "./sign-in-modal/EmployerSignInForm";
import SocialLoginButtons from "./sign-in-modal/SocialLoginButtons";

const SignInModal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header p-4">
            <h4 className="mb-0 text-center">Login to Your Account</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="login-register">
              <AccountType />
              <div className="tab-content">
                <div className="tab-pane active" id="candidate" role="tabpanel">
                  <CandidateSignInForm />
                </div>
                <div className="tab-pane fade" id="employer" role="tabpanel">
                  <EmployerSignInForm />
                </div>
              </div>
              <div className="mt-4">
                <SocialLoginButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
