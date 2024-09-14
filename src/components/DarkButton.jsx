import React from "react";
import styled from "styled-components";

const DarkButtonSwich = ({ setDarkMode, darkMode }) => {
  return (
    <StyledWrapper darkMode={darkMode}>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider">
          <span className="circle">
            <span className="shine shine-1" />
            <span className="shine shine-2" />
            <span className="shine shine-3" />
            <span className="shine shine-4" />
            <span className="shine shine-5" />
            <span className="shine shine-6" />
            <span className="shine shine-7" />
            <span className="shine shine-8" />
            <span className="moon" />
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em; /* Keep the width the same */
    height: 1.5em; /* Decreased height */
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
    transition: 0.4s;
    border-radius: 30px;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    content: "";
    height: 1em; /* Adjusted to fit smaller height */
    width: 1em;
    border-radius: 20px;
    left: 0.2em;
    bottom: 0.2em; /* Adjusted bottom position */
    background-color: ${({ darkMode }) => (darkMode ? "#333" : "#fff000")};
    transform: rotate(360deg) translateX(0);
    transition: 0.4s;
  }

  .switch input:checked + .slider .circle {
    transform: rotate(0deg) translateX(1.5em) !important;
  }

  .switch input:checked + .slider .circle .shine {
    transform: translate(0%, 0%) !important;
  }

  .switch input:checked + .slider .circle .moon {
    left: -10%;
    opacity: 1;
    transform: translateY(-60%);
  }

  .moon {
    position: absolute;
    left: -100%;
    top: 50%;
    opacity: 0;
    background-color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
    width: 1rem; /* Adjusted size for smaller height */
    height: 1rem;
    border-radius: 99999px;
    transform: translateY(-50%);
    transition: all 0.4s;
  }

  .shine {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.2rem; /* Adjusted shine size */
    height: 0.2rem;
    background-color: #fff000;
    border-radius: 1rem;
    transition: all 0.4s;
  }

  .shine-1 {
    transform: translate(-50%, -375%);
  }
  .shine-2 {
    transform: translate(175%, -275%);
  }
  .shine-3 {
    transform: translate(275%, -50%);
  }
  .shine-4 {
    transform: translate(175%, 175%);
  }
  .shine-5 {
    transform: translate(-50%, 275%);
  }
  .shine-6 {
    transform: translate(-275%, 175%);
  }
  .shine-7 {
    transform: translate(-375%, -50%);
  }
  .shine-8 {
    transform: translate(-275%, -275%);
  }
`;

export default DarkButtonSwich;
