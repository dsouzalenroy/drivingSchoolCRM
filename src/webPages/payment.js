import React from "react";
import thinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.png";
import "../styles/chooseLocation.css";
import "../styles/payment.css";
import backArrow from "../images/backArrow.svg";
import nextArrow from "../images/nextArrow.svg";
import { NavLink } from "react-router-dom";

import ThinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.svg";

class payment extends React.Component {
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
      //     <h1 className="paymentHeader">Check Out</h1>
      //     <h2 className="paymentHeaderTwo">Payment Information</h2>
      //     <form onSubmit={this.handleSubmit} className="cardDetails">
      //       <div className="cardHoldersName">
      //         <label>
      //           Card Holder's Name:
      //           <br />
      //           <input
      //             type="text"
      //             // value={this.state.value}
      //             // onChange={this.handleChange}
      //           />
      //         </label>
      //       </div>
      //       <div className="cardNumber">
      //         <label>
      //           Card Number:
      //           <br />
      //           <input
      //             type="text"
      //             // value={this.state.value}
      //             // onChange={this.handleChange}
      //           />
      //         </label>
      //       </div>
      //       <div className="cardType">
      //         <label>
      //           Card Type:
      //           <br />
      //           <input
      //             type="text"
      //             // value={this.state.value}
      //             // onChange={this.handleChange}
      //           />
      //         </label>
      //       </div>
      //       <div className="expiryDate">
      //         <label>
      //           Expiry Date:
      //           <br />
      //           <input
      //             type="text"
      //             // value={this.state.value}
      //             // onChange={this.handleChange}
      //           />
      //         </label>
      //       </div>

      //       <div className="cvv">
      //         <label>
      //           CVV:
      //           <br />
      //           <input
      //             type="text"
      //             // value={this.state.value}
      //             // onChange={this.handleChange}
      //           />
      //         </label>
      //       </div>

      //       <input type="submit" value="Submit" className="submit" />
      //     </form>
      //     <div className="NavButtons">
      //       <p className="backButtonText">Back</p>
      //       <button className="backButton">
      //         <NavLink to="/chooseYourLessonType">
      //           <img src={backArrow} alt="backArrow" />
      //         </NavLink>
      //       </button>
      //       <p className="buttonText">
      //         Next
      //         <button className="nextbutton">
      //           <NavLink to="/thankYou">
      //             <img src={nextArrow} alt="nextArrow" />
      //           </NavLink>
      //         </button>
      //       </p>
      //     </div>
      //   </div>
      // </div>
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
                  <h1>Payment</h1>

                  <div className="navButtons">
                    <p className="backButtonText">
                      <button className="backButton">
                        <NavLink to="/chooseYourLessonType">
                          <img src={backArrow} alt="backArrow" />
                        </NavLink>
                      </button>
                      Back
                    </p>

                    <p className="buttonText">
                      Next
                      <button className="nextbutton">
                        <NavLink to="/thankYou">
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

export default payment;
