import React from "react";
import "../../../style/start-loader.scss";

export default function StartLoader() {
  return (
    <div className="start-loader">
      <div className="start-loader__particles" />

      <div className="start-loader__container">
        <div className="start-loader__rings">
          <div className="ring ring--outer" />
          <div className="ring ring--inner" />
          <div className="core" />
        </div>

        <h2 className="start-loader__title">
          <span>Loading</span>
        </h2>

        <div className="start-loader__progress">
          <div className="progress-bar" />
        </div>
      </div>
    </div>
  );
}