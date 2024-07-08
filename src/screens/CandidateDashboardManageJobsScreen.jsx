import React from "react";
import ManageJobsTable from "../components/candidate-dashboard/manage-job/ManageJobsTable";
import TablePagination from "../components/candidate-dashboard/manage-job/TablePagination";

const CandidateDashboardManageJobsScreen = () => {
  return (
    <div className="col-lg-9 mt-4 mt-lg-0">
      <div className="row">
        <div className="col-md-12">
          <div className="user-dashboard-info-box bg-white p-4 shadow-sm mb-0">
            <div className="row mb-4">
              <div className="col-md-7 col-sm-5 d-flex align-items-center">
                <div className="section-title-02 mb-0 ">
                  <h4 className="mb-0">Manage Jobs</h4>
                </div>
              </div>
              <div className="col-md-5 col-sm-7 mt-3 mt-sm-0">
                <div className="search">
                  <i className="fas fa-search"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search...."
                  />
                </div>
              </div>
            </div>
            <ManageJobsTable />
            <TablePagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardManageJobsScreen;
