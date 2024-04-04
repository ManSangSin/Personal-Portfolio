import "./welcome.css";

import { useEffect } from "react";
import { useState } from "react";
import HelloMessage from "./HelloMessage";

const Welcome = () => {
  const [isWelcomeActive, setWelcomeActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWelcomeActive(false);
    }, 2800),
      [];
  });
  return (
    <>
      {isWelcomeActive ? (
        <div className="welcomeContainer">
          <h1 className="welcomeText">Man Sang Sin Portfolio</h1>
          <HelloMessage />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Welcome;
