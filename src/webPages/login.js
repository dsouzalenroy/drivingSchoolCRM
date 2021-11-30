import React from "react";
import "../styles/chooseLocation.css";
import "../styles/payment.css";
import "../styles/login.css";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { NavLink } from "react-router-dom";
import ThinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.svg";

class login extends React.Component {
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
                {/* <div className="left d-none d-md-block d-lg-block d-xl-block"> */}
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
                  <h1>Choose Location</h1>

                  <div className="navButtons">
                    <p className="backButtonText">
                      <button className="backButton">
                        {/* <NavLink to="/">
                          <img src={backArrow} alt="backArrow" />
                        </NavLink> */}
                      </button>
                      Back
                    </p>

                    <p className="buttonText">
                      Next
                      <button className="nextbutton">
                        {/* <NavLink to="/chooseYourLessonType">
                          <img src={nextArrow} alt="nextArrow" />
                        </NavLink> */}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default login;
