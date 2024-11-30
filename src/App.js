import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Interaction from "./components/Interaction";

const App = () => {
  const [step, setStep] = useState("home");

  const navigateToLogin = () => setStep("login");
  const onLoginSuccess = () => setStep("interaction");

  return (
    <>
      {step === "home" && <Home navigateToLogin={navigateToLogin} />}
      {step === "login" && <Login onLoginSuccess={onLoginSuccess} />}
      {step === "interaction" && <Interaction />}
    </>
  );
};

export default App;
