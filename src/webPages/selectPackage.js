import React from "react";
import thinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.png";
import "../styles/selectPackage.css";
import sixHourDuration from "../images/sixHourDuration.svg";
import tenHourDuration from "../images/tenHourDuration.svg";
import nextArrow from "../images/nextArrow.svg";
import backArrow from "../images/backArrow.svg";
import { NavLink } from "react-router-dom";

import { Component } from "react/cjs/react.production.min";
import ThinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.svg";

class SelectPackage extends Component {
  handleClick = (event) => event.target.classList.add("packageSelected");
  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div
                className="col-sm-0 col-xl-5 col-lg-5 col-md-3"
                style={{
                  backgroundImage: `url(${ThinkSafeDriveSafe})`,
                  backgroundRepeat: "no-repeat"
                }}
              >
                {/* <div className="left  d-none d-md-block d-lg-block d-xl-block"> */}
                <h1 className="imageTitle">
                  Think Safe,
                  <br /> Drive Safe
                </h1>
                <p className="imageDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  nunc convallis ultricies erat non. Ac tristique viverra
                  sagittis in. Scelerisque velit dolor feugiat tortor habitant.
                </p>
              </div>
              {/* </div> */}
              <div className="col-sm-12 col-xl-7 col-lg-7 col-md-9">
                <div className="right">
                  <h1>Select Package </h1>

                  <div className="SelectPackageComponents">
                    <div>
                      <button className="hourlyPackages">
                        <NavLink to="/chooseMultipleLessonDateAndTime">
                          <img
                            src={sixHourDuration}
                            alt="sixHourDuration"
                            className="sixHourDuration"
                            onClick={this.handleClick}
                          />
                        </NavLink>
                      </button>
                      <button className="hourlyPackages">
                        <NavLink to="/chooseMultipleLessonDateAndTime">
                          <img
                            src={tenHourDuration}
                            alt="tenHourDuration"
                            className="tenHourDuration"
                            onClick={this.handleClick}
                          />
                        </NavLink>
                      </button>
                    </div>

                    <div className="packageDetails">
                      <p>
                        Location: <b>Brisbane</b>
                      </p>
                      <p>
                        Trainer: <b>Annette Black</b>
                      </p>
                    </div>
                  </div>

                  {/* <div className="navButtons">
                    <p className="backButtonText">
                      <button className="backButton">
                        <NavLink to="/">
                          <img src={backArrow} alt="backArrow" />
                        </NavLink>
                      </button>
                      Back
                    </p>

                    <p className="buttonText">
                      Next
                      <button className="nextbutton">
                        <NavLink to="/chooseYourLessonType">
                          <img src={nextArrow} alt="nextArrow" />
                        </NavLink>
                      </button>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SelectPackage;
