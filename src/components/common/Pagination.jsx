import React from "react";

const Pagination = () => {
  return (
    <div className="row">
      <div className="col-12 text-center mt-4">
        <ul className="pagination justify-content-center mb-0">
          <li className="page-item disabled">
            {" "}
            <span className="page-link">Prev</span>{" "}
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">1 </span>{" "}
            <span className="sr-only">(current)</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              25
            </a>
          </li>
          <li className="page-item">
            {" "}
            <a className="page-link" href="#">
              Next
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
