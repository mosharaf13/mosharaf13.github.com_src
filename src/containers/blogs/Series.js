import React from "react";
import "./Series.css";
import SeriesCard from "../../components/seriesCard/SeriesCard";
import { seriesSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Series() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="series">
      <div className="series-header">
        <h1 className="series-header-text">{seriesSection.title}</h1>
        <p className="subTitle series-subtitle">{seriesSection.subtitle}</p>
      </div>
      <div className="series-main-div">
          {seriesSection.tutorials.in_progress.map(tutorial => {
              return (
                  <SeriesCard
                      series={{
                          url: tutorial.url,
                          title: tutorial.title,
                          type: "in_progress"
                      }}
                  />
              );
          })}
          {seriesSection.tutorials.completed.map(tutorial => {
            return (
              <SeriesCard
                series={{
                  url: tutorial.url,
                  title: tutorial.title,
                    type: "completed"
                }}
              />
            );
          })}
      </div>
    </div>
    </Fade>
  );
}
