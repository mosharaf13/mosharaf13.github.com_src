import React from "react";
import "./SeriesCard.css";

export default function SeriesCard({ series }) {
  function openUrlInNewTab(url) {
    if(url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div>
      <div className="series-container" onClick={() => openUrlInNewTab(series.url)}>
        <a className={series.type === "in_progress" ? 'in-progress-series-card' : "series-card"}  href="#series" >
          <h3 className="series-title">{series.title}</h3>
          <div className={series.type === "in_progress" ? 'in-progress-go-corner' : "go-corner"} >
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
