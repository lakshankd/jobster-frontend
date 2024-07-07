import React from "react";
import PackageTable from "./PackageTable";

const PackageAndPaymentsTab = () => {
  return (
    <div
      className="tab-pane fade show"
      id="Package"
      role="tabpanel"
      aria-labelledby="Package-tab"
    >
      <div className="bg-white p-4 shadow-sm">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-4">Buy New Package</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <PackageTable />
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <a className="btn btn-primary" href="#">
              Update Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageAndPaymentsTab;
