import React from "react";
import DatePosted from "./left-sidebar/DatePosted";
import Specialism from "./left-sidebar/Specialism";
import JobType from "./left-sidebar/JobType";
import Experience from "./left-sidebar/Experience";
import OfferedSalary from "./left-sidebar/OfferedSalary";
import Gender from "./left-sidebar/Gender";
import Qualification from "./left-sidebar/Qualification";

const JobListingLeftSideBar = () => {
  return (
    <div className="col-lg-3">
      <div className="sidebar">
        <DatePosted />
        <Specialism />
        <JobType />
        <Experience />
        <OfferedSalary />
        <Gender />
        <hr />
        <Qualification />
      </div>
    </div>
  );
};

export default JobListingLeftSideBar;
