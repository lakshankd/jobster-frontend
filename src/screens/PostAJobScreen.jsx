import React from "react";
import JobDetailTab from "../components/post-a-job/JobDetailTab";
import PackageAndPaymentsTab from "../components/post-a-job/PackageAndPaymentsTab";
import ConfirmTab from "../components/post-a-job/ConfirmTab";
import NavTabs from "../components/post-a-job/NavTabs";

const PostAJobScreen = () => {
  return (
    <>
      <section className="space-ptb bg-light">
        <div className="container">
          <div className="row">
            <NavTabs />
            <div className="col-lg-8 col-xl-9">
              <div className="tab-content" id="myTabContent">
                <JobDetailTab />
                <PackageAndPaymentsTab />
                <ConfirmTab />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostAJobScreen;
