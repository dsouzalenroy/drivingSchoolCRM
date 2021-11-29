import React from "react";
import "../styles/chooseMultipleLessonDateAndTime.css";
import MiniSingleTimeDropDown from "../components/MiniSingleTimeDropDown";
import MiniCalender from "../components/MiniCalender";

import backArrow from "../images/backArrow.svg";
import nextArrow from "../images/nextArrow.svg";
import { NavLink } from "react-router-dom";

class ChooseMultipleLessonDateAndTime extends React.Component {
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
                  <h1>Choose Time & Date</h1>

                  <div className="chooseMultipleLessonDateAndTimeComponenets">
                    <h2 className="chooseSlots">Choose time for your slots</h2>

                    <p className="chooseSlotDescription">
                      Some date and time might get delayed because of Covid{" "}
                      <br />
                      guidelines of your choosen location
                    </p>
                    <p className="slotOne">Slot 1</p>

                    <div className="miniDateAndTimeSlotOne">
                      <MiniCalender className="miniCalenderOne" />

                      <MiniSingleTimeDropDown className="miniSingleTimeDropDownOne" />
                    </div>
                    <p className="slotTwo">Slot 2</p>

                    <div className="miniDateAndTimeSlotTwo">
                      <MiniCalender className="miniCalenderOne" />

                      <MiniSingleTimeDropDown className="miniSingleTimeDropDownOne" />
                    </div>
                    <p className="slotThree">Slot 3</p>

                    <div className="miniDateAndTimeSlotThree">
                      <MiniCalender className="miniCalenderOne" />

                      <MiniSingleTimeDropDown className="miniSingleTimeDropDownOne" />
                    </div>
                  </div>

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
                        <NavLink to="/payment">
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

// function ChooseMultipleLessonDateAndTime() {
//   return (
//     <>
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-0 col-xl-5 col-lg-5 col-md-3">
//               <div className="left d-none d-md-block d-lg-block d-xl-block">
//                 <h1 className="imageTitle">
//                   Think Safe,
//                   <br /> Drive Safe
//                 </h1>
//                 <p className="imageDescription">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//                   nunc convallis ultricies erat non. Ac tristique viverra
//                   sagittis in. Scelerisque velit dolor feugiat tortor habitant.
//                 </p>
//               </div>
//             </div>
//             <div className="col-sm-12 col-xl-7 col-lg-7 col-md-9">
//               <div className="right">
//                 <h1>Choose Time & Date</h1>

//                 <div className="chooseMultipleLessonDateAndTimeComponenets">
//                   <h2 className="chooseSlots">Choose time for your slots</h2>

//                   <p className="chooseSlotDescription">
//                     Some date and time might get delayed because of Covid <br />
//                     guidelines of your choosen location
//                   </p>
//                   <p className="slotOne">Slot 1</p>

//                   <div className="miniDateAndTimeSlotOne">
//                     <MiniCalender className="miniCalenderOne" />

//                     <MiniSingleTimeDropDown className="miniSingleTimeDropDownOne" />
//                   </div>
//                   <p className="slotTwo">Slot 2</p>

//                   <div className="miniDateAndTimeSlotTwo">
//                     <MiniCalender className="miniCalenderOne" />

//                     <MiniSingleTimeDropDown className="miniSingleTimeDropDownOne" />
//                   </div>
//                   <p className="slotThree">Slot 3</p>

//                   <div className="miniDateAndTimeSlotThree">
//                     <MiniCalender className="miniCalenderOne" />

//                     <MiniSingleTimeDropDown className="miniSingleTimeDropDownOne" />
//                   </div>
//                 </div>

//                 <div className="navButtons">
//                   <p className="backButtonText">
//                     <button className="backButton">
//                       <NavLink to="/chooseYourLessonType">
//                         <img src={backArrow} alt="backArrow" />
//                       </NavLink>
//                     </button>
//                     Back
//                   </p>

//                   <p className="buttonText">
//                     Next
//                     <button className="nextbutton">
//                       <NavLink to="/payment">
//                         <img src={nextArrow} alt="nextArrow" />
//                       </NavLink>
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

export default ChooseMultipleLessonDateAndTime;
