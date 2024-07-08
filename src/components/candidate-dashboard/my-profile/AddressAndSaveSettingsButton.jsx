import React from "react";

const AddressAndSaveSettingsButton = () => {
  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm mb-0">
      <div className="">
        <h4 className="mb-3">Address</h4>
        <div className="mb-3">
          <label className="form-label">Enter Your Location</label>
          <input
            type="text"
            className="form-control"
            defaultValue="222 West Arnold St. New York, NY 20006"
          />
        </div>
      </div>
      <a className="btn btn-md btn-primary mt-4" href="#">
        Save Settings
      </a>
    </div>
  );
};

export default AddressAndSaveSettingsButton;
