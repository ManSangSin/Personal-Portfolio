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
        <div className="welcomeContainer">I am Welcome</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Welcome;
