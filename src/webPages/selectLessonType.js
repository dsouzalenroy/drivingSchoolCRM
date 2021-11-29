import React from "react";
import thinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.png";
import "../styles/selectLessonType.css";
import backArrow from "../images/backArrow.svg";
import nextArrow from "../images/nextArrow.svg";
import oneHourLessonType from "../images/oneHourLessonType.svg";
import twoHourLessonType from "../images/twoHourLessonType.svg";
import { NavLink } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";

class SelectLessonType extends Component {
  handleClick = (event) => event.target.classList.add("lessonSelected");
  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-0 col-xl-5 col-lg-5 col-md-3">
                <div className="left d-none d-md-block d-lg-block d-xl-block">
                  <h1 className="imageTitle">
                    Think Safe,
                    <br /> Drive Safe
                  </h1>
                  <p className="imageDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nunc convallis ultricies erat non. Ac tristique viverra
                    sagittis in. Scelerisque velit dolor feugiat tortor
                    habitant.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-xl-7 col-lg-7 col-md-9">
                <div className="right">
                  <h1>Select Lesson Type</h1>

                  <div className="SelectLessonTypeComponents">
                    <NavLink to="/chooseSingleLessonDateAndTime">
                      <img
                        src={oneHourLessonType}
                        alt="oneHourLessonType"
                        className="oneHourLessonType"
                        onClick={this.handleClick}
                      />
                    </NavLink>
                    <NavLink to="/chooseSingleLessonDateAndTime">
                      <img
                        src={twoHourLessonType}
                        alt="twoHourLessonType"
                        className="twoHourLessonType"
                        onClick={this.handleClick}
                      />
                    </NavLink>
                  </div>
                  <br />

                  <div className="PackagetrainerDetails">
                    Location: <b>Brisbane</b>
                    <br />
                    <br />
                    Trainer: <b>Trainer Name</b>
                    <br />
                    <br />
                    Date/Time: <b>8:00 am - 8:45 am, 3 Sept</b>
                    <br />
                    <br />
                    Time: <b>1 Hour</b>
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

export default SelectLessonType;
