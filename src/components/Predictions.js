import React from "react";
import PredictionDay from "../components/PredictionDay";

import "../styles/Predictions.css";

export default function Predictions() {
  return (
    <div className="col-8  predictions">
      <div className="prediction-wrapper">
        <div className="row" id="forecast">
          <div className="col">
            <PredictionDay day="Monday" icon="01d" minT={10} maxT={14} />
          </div>
          <div className="col">
            <PredictionDay day="Tuesday" icon="01d" minT={15} maxT={20} />
          </div>
          <div className="col">
            <PredictionDay day="Wednesday" icon="10d" minT={8} maxT={12} />
          </div>
          <div className="col">
            <PredictionDay day="Thursday" icon="09d" minT={4} maxT={10} />
          </div>
          <div className="col">
            <PredictionDay day="Friday" icon="13d" minT={0} maxT={3} />
          </div>
          <div className="col">
            <PredictionDay day="Saturday" icon="13d" minT={-1} maxT={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
