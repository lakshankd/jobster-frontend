import React from "react";

const PageLinks = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <ul className="pagination mt-4 mb-lg-0">
          <li className="page-item disabled me-auto">
            <span className="page-link">Prev</span>
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
          <li className="page-item ms-auto">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageLinks;
