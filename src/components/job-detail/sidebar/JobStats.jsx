import React from 'react'

const JobStats = () => {
  return (
    <div className="widget border-0">
    <div className="jobster-company-view">
      <ul className="list-unstyled">
        <li>
          <div className="widget-box">
            <div className="d-flex">
              <i className="flaticon-clock fa-2x fa-fw text-primary"></i>
              <span className="ps-3">35 Days</span>
            </div>
          </div>
        </li>
        <li>
          <div className="widget-box">
            <div className="d-flex">
              <i className="flaticon-loupe fa-2x fa-fw text-primary"></i>
              <span className="ps-3">35697 Displayed</span>
            </div>
          </div>
        </li>
        <li>
          <div className="widget-box">
            <div className="d-flex">
              <i className="flaticon-personal-profile fa-2x fa-fw text-primary"></i>
              <span className="ps-3">300-500 Application</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default JobStats