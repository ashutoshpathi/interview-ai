import React from "react";
import "../../../style/loader.scss";

export default function Loader() {
  return (
    <div className="wow-loader">
      <div className="wow-loader__card">
        <div className="wow-loader__spinner" />

        <h2 className="wow-loader__title">GENERATING REPORT</h2>
        <p className="wow-loader__subtitle">
          Analyzing your profile and preparing insights...
        </p>

        <div className="wow-loader__progress">
          <div className="wow-loader__progress-bar" />
        </div>
      </div>
    </div>
  );
}