import React from "react";
import thinkSafeDriveSafe from "../images/ThinkSafeDriveSafe.png";
import "../styles/chooseYourLessonType.css";
import singleLessonsType from "../images/singleLessonsType.svg";
import packageLessons from "../images/packageLessons.svg";
import nextArrow from "../images/nextArrow.svg";
import backArrow from "../images/backArrow.svg";
import { NavLink, Route } from "react-router-dom";
import "../styles/chooseLocation.css";

class ChooseYourLessonType extends React.Component {
  lessonSelected = (event) => event.target.classList.add("lessonTypeSelected");

  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-0 col-xl-5 col-lg-5 col-md-3">
                <div className="left d-none d-md-block d-lg-block d-xl-blockk">
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
                  <h1>
                    Choose your
                    <br /> Lesson Type
                  </h1>

                  <div className="chooseYourLessonTypeComponents">
                    <div className="lessonTypes">
                      <NavLink to="/selectLessonType">
                        <button className="lessonTypeButton">
                          <img
                            src={singleLessonsType}
                            alt="singleLessonsType"
                            className="packageOne"
                            onClick={this.lessonSelected}
                          />
                        </button>
                      </NavLink>
                      <br />
                      <br />

                      <NavLink to="/selectPackage">
                        <button className="lessonTypeButton">
                          <img
                            src={packageLessons}
                            alt="packageLessons"
                            className="packageTwo"
                            onClick={this.lessonSelected}
                          />
                        </button>
                      </NavLink>
                    </div>
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

// const ChooseYourLessonType = () => {
//   const lessonSelected = (event) => {
//     event.target.classList.add("lessonTypeSelected");
//   };

//   return (
//     <>
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-0 col-xl-5 col-lg-5 col-md-3">
//               <div className="left d-none d-md-block d-lg-block d-xl-blockk">
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
//                 <h1>
//                   Choose your
//                   <br /> Lesson Type
//                 </h1>

//                 <div className="chooseYourLessonTypeComponents">
//                   <div className="lessonTypes">
//                     <NavLink to="/selectLessonType">
//                       <button className="lessonTypeButton">
//                         <img
//                           src={singleLessonsType}
//                           alt="singleLessonsType"
//                           className="packageOne"
//                           onClick={lessonSelected}
//                         />
//                       </button>
//                     </NavLink>
//                     <br />
//                     <br />

//                     <NavLink to="/selectPackage">
//                       <button className="lessonTypeButton">
//                         <img
//                           src={packageLessons}
//                           alt="packageLessons"
//                           className="packageTwo"
//                           onClick={lessonSelected}
//                         />
//                       </button>
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

export default ChooseYourLessonType;
