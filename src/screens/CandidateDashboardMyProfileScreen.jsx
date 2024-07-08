import React from "react";
import BasicInformationForm from "../components/candidate-dashboard/my-profile/BasicInformationForm";
import SocialLinksForm from "../components/candidate-dashboard/my-profile/SocialLinksForm";
import AddressAndSaveSettingsButton from "../components/candidate-dashboard/my-profile/AddressAndSaveSettingsButton";

const CandidateDashboardMyProfileScreen = () => {
  return (
    <div className="col-lg-9 mt-4 mt-lg-0">
      <div className="row">
        <div className="col-md-12">
          <BasicInformationForm />
          <SocialLinksForm />
          <AddressAndSaveSettingsButton />
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardMyProfileScreen;
