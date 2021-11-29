import React from "react";
import "../styles/trainerOne.css";
import femaleTrainer from "../images/femaleTrainer.svg";
import { Component } from "react/cjs/react.production.min";

class Trainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  handleClick() {
    console.log("Button Clicked");
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    let button_class = this.state.isToggleOn
      ? "selectedTrainerButton"
      : "selecTrainerButton";
    return (
      <div className="trainers">
        <table className="trainerProfile">
          <tr>
            <td className="trainerImage">
              <img
                src={femaleTrainer}
                alt="femaleTrainer"
                className="profilePic"
              />
            </td>
            <td className="trainerDetails">
              <h2 className="trainerTwoName">{this.props.trainerName}</h2>

              <h4 className="trainerTitle">Driving class Expert</h4>
              <p className="trainerDescription">
                Cupidatat excepteur aliqua sit ipsum <br />
                quis commodo ad. Qui ad exercitation duis sunt cillum.
                <br />
              </p>
              <button
                className={button_class}
                onClick={this.handleClick.bind(this)}
              >
                {this.state.isToggleOn ? "Selected" : "Select Trainer"}
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Trainers;
