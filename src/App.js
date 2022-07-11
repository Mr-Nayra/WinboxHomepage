import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/Screens/Login/Homepage";
import StepsCont from "./components/Screens/PopUp/Steps";
import Header from "./components/Elements/Header/Header";
import PrivacyPolicy from "./components/Screens/Policies and conditions/PrivacyPolicy";
import TermsAndConditions from "./components/Screens/Policies and conditions/TermsAndConditions";
import Footer from "./components/Elements/Footer/Footer";

function App() {
  const [showPopUp, setShowPopUp] = useState(0);

  const renderPopUp = () => {
    setShowPopUp("1");
  };

  const closePopUp = () => {
    setShowPopUp("0");
  };

  return (
    <div>
      {showPopUp === "1" && <StepsCont closePopUp={closePopUp} />}
      <Header onClick={renderPopUp} />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-conditions">
          <TermsAndConditions />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
