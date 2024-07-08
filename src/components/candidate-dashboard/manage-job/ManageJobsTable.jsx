import React, { useState } from "react";
import { manageJobsTableData } from "../../../data/candidateDashboardData";

const ManageJobsTable = () => {
  const [tableData, setTableData] = useState(manageJobsTableData);
  return (
    <div className="user-dashboard-table table-responsive">
      <table className="table table-bordered">
        <thead className="bg-light">
          <tr>
            <th scope="col">Job Title</th>
            <th scope="col">Applications</th>
            <th scope="col">Featured</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="border-top-0">
          {tableData?.map((job, index) => (
            <tr key={index}>
              <th scope="row">
                {job.title}
                <p className="mb-1 mt-2">Expiry: {job.expiry}</p>
                <p className="mb-0">Address: {job.address}</p>
              </th>
              <td>{job.applications}</td>
              <td>
                <i className="far fa-star"></i>
              </td>
              <td>
                <ul className="list-unstyled mb-0 d-flex">
                  <li>
                    <a
                      href="#"
                      className="text-primary"
                      data-bs-toggle="tooltip"
                      title="view"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-info"
                      data-bs-toggle="tooltip"
                      title="Edit"
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-danger"
                      data-bs-toggle="tooltip"
                      title="Delete"
                    >
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageJobsTable;
