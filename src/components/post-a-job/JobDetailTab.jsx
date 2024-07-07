import React from "react";

const JobDetailTab = () => {
  return (
    <div
      className="tab-pane fade active show"
      id="Job-detail"
      role="tabpanel"
      aria-labelledby="Job-detail-tab"
    >
      <div className="row">
        <div className="col-12">
          <div className="bg-white p-4 shadow-sm mb-4">
            <form className="row g-2">
              <div className="mb-2 col-md-12">
                <label className="form-label">Job Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a Title"
                />
              </div>
              <div className="mb-2 col-md-12">
                <label className="form-label">Description *</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <div className="mb-2 col-sm-6">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address of Contact Person"
                />
              </div>
              <div className="mb-2 col-sm-6">
                <label className="form-label">Username *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="mb-2 col-lg-12 col-xl-4">
                <label className="form-label">Application Deadline</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-2 col-sm-6 col-xl-4 select-border">
                <label className="form-label">Job Sector *</label>
                <select
                  className="form-control basic-select"
                  defaultValue="value-01"
                >
                  <option value="value 01">Accountancy</option>
                  <option value="value 02">Architecture</option>
                  <option value="value 03">Finance</option>
                  <option value="value 04">Education</option>
                  <option value="value 05">Engineering</option>
                  <option value="value 06">Estate Agency</option>
                  <option value="value 07">IT Contractor</option>
                  <option value="value 08">Law</option>
                </select>
              </div>
              <div className="mb-2 col-sm-6 col-xl-4 select-border">
                <label className="form-label">Job Type *</label>
                <select
                  className="form-control basic-select"
                  defaultValue="value-01"
                >
                  <option value="value 01">Sales & Marketing</option>
                  <option value="value 02">Human Resources</option>
                  <option value="value 03">IT Contractor</option>
                </select>
              </div>
              <div className="mb-2 col-md-12 select-border">
                <label className="form-label">Job Apply Type</label>
                <select className="form-control basic-select">
                  <option value="value 01">Human Resources</option>
                  <option value="value 02">Sales & Marketing</option>
                  <option value="value 03">IT Contractor</option>
                </select>
              </div>
              <div className="col-md-12 mb-0">
                <label className="form-label">Salary *</label>
              </div>
              <div className="mb-2 col-sm-6 mt-0 select-border">
                <select className="form-control basic-select">
                  <option value="value 01">10000</option>
                  <option value="value 02">25000</option>
                  <option value="value 03">35000</option>
                </select>
              </div>
              <div className="col-sm-3 mt-0">
                <div className="input-group mb-2">
                  <div className="input-group-prepend d-flex">
                    <div className="input-group-text">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                  />
                </div>
              </div>
              <div className="col-sm-3 mt-0">
                <div className="input-group mb-2">
                  <div className="input-group-prepend d-flex">
                    <div className="input-group-text">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                  />
                </div>
              </div>
              <div className="mb-2 col-sm-6 col-xl-3 mb-xl-0 select-border">
                <label className="form-label">State</label>
                <select
                  className="form-control basic-select"
                  defaultValue="value-01"
                >
                  <option value="value 01">Connecticut</option>
                  <option value="value 02">New York</option>
                  <option value="value 03">Louisiana</option>
                  <option value="value 04">Wisconsin</option>
                  <option value="value 05">Maryland</option>
                  <option value="value 06">Mississippi</option>
                  <option value="value 07">New Mexico</option>
                </select>
              </div>
              <div className="mb-2 col-sm-6 col-xl-3 mb-xl-0 select-border">
                <label className="form-label">Currency position</label>
                <select
                  className="form-control basic-select"
                  defaultValue="value-01"
                >
                  <option value="value 01">U.S. Dollar (USD)</option>
                  <option value="value 02">European Euro (EUR)</option>
                  <option value="value 03">Japanese Yen (JPY)</option>
                  <option value="value 04">British Pound (GBP)</option>
                  <option value="value 05">Swiss Franc (CHF)</option>
                  <option value="value 06">Canadian Dollar (CAD)</option>
                  <option value="value 07">Australian Dollar</option>
                </select>
              </div>
              <div className="mb-2 col-sm-6 col-xl-3 mb-xl-0 select-border">
                <label className="form-label">Thousand separator</label>
                <select
                  className="form-control basic-select"
                  defaultValue="value-01"
                >
                  <option value="value 01">Sales & Marketing</option>
                  <option value="value 02">Human Resources</option>
                  <option value="value 03">IT Contractor</option>
                </select>
              </div>
              <div className="col-sm-6 col-xl-3 mb-0 select-border">
                <label className="form-label">Number of decimals</label>
                <select className="form-control basic-select">
                  <option value="value 02">Human Resources</option>
                  <option value="value 01">Sales & Marketing</option>
                  <option value="value 03">IT Contractor</option>
                </select>
              </div>
            </form>
          </div>
          <div className="bg-white p-4 shadow-sm mb-4">
            <div className="row">
              <div className="col-12">
                <h5 className="mb-4">Other Information</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <form className="row g-2">
                  <div className="mb-2 col-sm-6 select-border">
                    <label className="form-label">Offered Salary</label>
                    <select className="form-control basic-select">
                      <option value="value 02">Human Resources</option>
                      <option value="value 03">IT Contractor</option>
                      <option value="value 01">Sales & Marketing</option>
                    </select>
                  </div>
                  <div className="mb-2 col-sm-6 select-border">
                    <label className="form-label">Career Level</label>
                    <select className="form-control basic-select">
                      <option value="value 03">IT Contractor</option>
                      <option value="value 02">Human Resources</option>
                      <option value="value 01">Sales & Marketing</option>
                    </select>
                  </div>
                  <div className="mb-2 col-sm-6 select-border">
                    <label className="form-label">Experience *</label>
                    <select
                      className="form-control basic-select"
                      defaultValue="value-01"
                    >
                      <option value="value 01">6M Experience</option>
                      <option value="value 02">9M Experience</option>
                      <option value="value 03">1Y Experience</option>
                      <option value="value 04">2Y Experience</option>
                      <option value="value 05">5Y Experience</option>
                    </select>
                  </div>
                  <div className="mb-2 col-sm-6 select-border">
                    <label className="form-label">Gender *</label>
                    <select className="form-control basic-select">
                      <option value="value 03">Male</option>
                      <option value="value 01">Female</option>
                    </select>
                  </div>
                  <div className="mb-2 col-sm-6 mb-sm-0 select-border">
                    <label className="form-label">Industry *</label>
                    <select className="form-control basic-select">
                      <option value="value 02">Human Resources</option>
                      <option value="value 01">Sales & Marketing</option>
                      <option value="value 03">IT Contractor</option>
                    </select>
                  </div>
                  <div className="mb-2 col-sm-6 mb-0 select-border">
                    <label className="form-label">Qualifications *</label>
                    <select className="form-control basic-select">
                      <option value="value 01">Sales & Marketing</option>
                      <option value="value 02">Human Resources</option>
                      <option value="value 03">IT Contractor</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 pb-5 shadow-sm mb-4">
            <div className="row">
              <div className="col-12">
                <h5 className="mb-4">File Attachments</h5>
              </div>
            </div>
            <div className="custom-file input-group mb-3 choose-file">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                Choose file
              </label>
            </div>
          </div>
          <div className="bg-white p-4 shadow-sm">
            <div className="row">
              <div className="col-12">
                <h5 className="mb-4">Address / Location</h5>
              </div>
            </div>
            <form className="row g-2 align-items-end">
              <div className="mb-2 col-sm-6 select-border">
                <label className="form-label">Country</label>
                <select
                  className="form-control basic-select"
                  defaultValue="value-01"
                >
                  <option value="value 01">Armenia</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="HT">Haiti</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PE">Peru</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Réunion</option>
                  <option value="RO">Romania</option>
                  <option value="RW">Rwanda</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="UY">Uruguay</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VN">Viet Nam</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </div>
              <div className="mb-2 col-sm-6 select-border">
                <label className="form-label">State</label>
                <select className="form-control basic-select">
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="mb-2 col-md-12 select-border">
                <label className="form-label">City</label>
                <select className="form-control basic-select">
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Orissa">Orissa</option>
                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttaranchal">Uttaranchal</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="col-xl-9 col-lg-8 mb-2">
                <label className="form-label">Full Address *</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-xl-3 col-lg-4 mb-2">
                <a className="btn btn-outline-primary d-grid" href="#">
                  Find on Map
                </a>
              </div>
              <div className="mb-3 col-md-4 mb-md-0">
                <label className="form-label">Latitude</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 col-md-4 mb-md-0">
                <label className="form-label">Longitude</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4 mb-0">
                <label className="form-label">Zoom</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 col-12 mt-3">
                <div className="custom-control form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="accepts-01"
                  />
                  <label className="custom-control-label" htmlFor="accepts-01">
                    You accept our Terms and Conditions and Privacy Policy
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <a className="btn btn-primary" href="#">
                  Post Job
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailTab;
