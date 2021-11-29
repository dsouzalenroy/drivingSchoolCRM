import React from "react";
import thinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.png";
import "../styles/chooseLocation.css";
import "../styles/payment.css";
import "../styles/login.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { NavLink } from "react-router-dom";

class login extends React.Component {
  render() {
    return (
      // <div className="chooseLocation container">
      //   <div className="left">
      //     <img
      //       src={thinkSafeDriveSafe}
      //       alt="thinkSafeDriveSafe"
      //       className="leftSideImage"
      //     />
      //     <div className="imageText">
      //       <h1 className="imageTitle">Think Safe, Drive Safe</h1>
      //       <p className="imageDescription">
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
      //         convallis ultricies erat non. Ac tristique viverra sagittis in.
      //         Scelerisque velit dolor feugiat tortor habitant.
      //       </p>
      //     </div>
      //   </div>
      //   <div className="right">
      //     <h1>Log In</h1>
      //     <form onSubmit={this.handleSubmit} className="cardDetails">
      //       <div className="cardHoldersName">
      //         <label>
      //           Enter Youur User Name:
      //           <br />
      //           <input type="text" />
      //         </label>
      //       </div>
      //       <div className="cardNumber">
      //         <label>
      //           Enter Your Password:
      //           <br />
      //           <input type="text" />
      //         </label>
      //       </div>

      //       <button>
      //         <NavLink to="/">
      //           <input type="submit" value="Submit" className="loginSubmit" />
      //         </NavLink>
      //       </button>
      //     </form>
      //     <p className="signUpOptions">Or sign up using</p>
      //     <p className="signUpIcons">
      //       <GoogleIcon />
      //       <FacebookIcon />
      //     </p>
      //   </div>
      // </div>
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
                  <h1>Choose Location</h1>

                  <div className="navButtons">
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
