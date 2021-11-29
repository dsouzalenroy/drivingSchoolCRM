import "./styles/App.css";
import ChooseLocation from "./webPages/ChooseLocation";
import ChooseMultipleLessonDateAndTime from "./webPages/chooseMultipleLessonDateAndTime";
import ChooseSingleLessonDateAndTime from "./webPages/ChooseSingleLessonDateAndTime";
import ChooseYourLessonType from "./webPages/chooseYourLessonType";
import SelectLessonType from "./webPages/selectLessonType";
import SelectPackage from "./webPages/selectPackage";
import SelectTrainer from "./webPages/selectTrainer";
import Testing from "./webPages/testing";
import Payment from "./webPages/payment";
import ThankYou from "./webPages/thankYou";
import Login from "./webPages/login";

import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ChooseLocation />
    </>
  );
};

const YourLessonType = () => {
  return (
    <>
      <ChooseYourLessonType />
    </>
  );
};

const MultipleLessonDateAndTime = () => {
  return (
    <>
      <ChooseMultipleLessonDateAndTime />
    </>
  );
};

const SingleLessonDateAndTime = () => {
  return (
    <>
      <ChooseSingleLessonDateAndTime />
    </>
  );
};

const LessonType = () => {
  return (
    <>
      <SelectLessonType />
    </>
  );
};

const Package = () => {
  return (
    <>
      <SelectPackage />
    </>
  );
};

const Trainer = () => {
  return (
    <>
      <SelectTrainer />
    </>
  );
};

const TestingPage = () => {
  return (
    <>
      <Testing />
    </>
  );
};

const PaymentPage = () => {
  return (
    <>
      <Payment />
    </>
  );
};

const ThankYouPage = () => {
  return (
    <>
      <ThankYou />
    </>
  );
};

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chooseMultipleLessonDateAndTime">
          <MultipleLessonDateAndTime />
        </Route>
        <Route path="/chooseSingleLessonDateAndTime">
          <SingleLessonDateAndTime />
        </Route>
        <Route path="/chooseYourLessonType">
          <YourLessonType />
        </Route>
        <Route path="/selectLessonType">
          <LessonType />
        </Route>
        <Route path="/selectPackage">
          <Package />
        </Route>
        <Route path="/selectTrainer">
          <Trainer />
        </Route>
        <Route path="/testing">
          <TestingPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/thankYou">
          <ThankYouPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}
