import React from "react";

const Qualification = () => {
  return (
    <div className="my-4 my-lg-5">
      <h5 className="mb-3 mb-md-4">
        Required Knowledge, Skills, and Abilities
      </h5>
      <ul className="list-unstyled list-style">
        <li>
          <i className="far fa-check-circle font-md text-primary me-2"></i>
          Commitment – understanding the price and having the willingness to pay
          that price
        </li>
        <li>
          <i className="far fa-check-circle font-md text-primary me-2"></i>
          Belief – believing in yourself and those around you
        </li>
        <li>
          <i className="far fa-check-circle font-md text-primary me-2"></i>
          Taking action – practice Ready, Fire, Aim…
        </li>
        <li>
          <i className="far fa-check-circle font-md text-primary me-2"></i>
          You will drift aimlessly until you arrive back at the original dock
        </li>
        <li className="mb-0">
          <i className="far fa-check-circle font-md text-primary me-2"></i>
          You will run aground and become hopelessly stuck in the mud
        </li>
      </ul>
    </div>
  );
};

export default Qualification;
