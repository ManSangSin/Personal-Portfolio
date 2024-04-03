import "./welcome.css";

import { useEffect } from "react";
import { useState } from "react";

const Welcome = () => {
  const [isWelcomeActive, setWelcomeActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWelcomeActive(false);
    }, 2500),
      [];
  });
  return (
    <>
      {isWelcomeActive ? (
        <div className="welcomeContainer">
          <h1 className="welcomeText">Man Sang Sin Portfolio</h1>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Welcome;
