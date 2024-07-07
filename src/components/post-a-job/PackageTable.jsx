import React from "react";

const PackageTable = () => {
  return (
    <table className="table table-striped mb-0">
      <thead className="bg-light">
        <tr>
          <th scope="col">Select</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Total Jobs</th>
          <th scope="col">Job Expiry</th>
          <th scope="col">Package Expiry</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="pachage-01"
              />
              <label
                className="custom-control-label"
                htmlFor="pachage-01"
              ></label>
            </div>
          </td>
          <th>Golden</th>
          <td>$90.00</td>
          <td>15</td>
          <td>30 Days</td>
          <td>30 Days</td>
        </tr>
        <tr>
          <td>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="pachage-02"
              />
              <label
                className="custom-control-label"
                htmlFor="pachage-02"
              ></label>
            </div>
          </td>
          <th>Premium</th>
          <td>$159.00</td>
          <td>25</td>
          <td>60 Days</td>
          <td>60 Days</td>
        </tr>
        <tr>
          <td>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="pachage-03"
              />
              <label
                className="custom-control-label"
                htmlFor="pachage-03"
              ></label>
            </div>
          </td>
          <th>Silver</th>
          <td>$50.00</td>
          <td>10</td>
          <td>20 Days</td>
          <td>20 Days</td>
        </tr>
        <tr>
          <td>
            <div className="custom-control form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="pachage-04"
              />
              <label
                className="custom-control-label"
                htmlFor="pachage-04"
              ></label>
            </div>
          </td>
          <th>Standard</th>
          <td>Free</td>
          <td>1</td>
          <td>15 Days</td>
          <td>15 Days</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PackageTable;
