import { destinationsDetailsLeft } from "@/data/destinationsDetails";
import React from "react";
import DestinationsDetailsFaq from "./DestinationsDetailsFaq";

const { overviewTitle, overviews, faqs } =
  destinationsDetailsLeft;

const DestinationsDetailsLeft = ({destinationDetail}) => {
  return (
    <div className="destinations-details__left">
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">{destinationDetail.title}</h3>
          {destinationDetail.description.split("\n").map((text, identifier) => (
            <p key={identifier} className={`destinations-details__discover-text-1`}>
              {text}
            </p>
          ))}
      </div>
      <div className="destinations-details__overview">
        <h3 className="destinations-details__title">{overviewTitle}</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          {overviews.map(({ id, left, right }) => (
            <li key={id}>
              <div className="destinations-details__overview-left">
                <p>{left}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{right}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <DestinationsDetailsFaq faqs={faqs} />

      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Location</h3>
        <iframe src={destinationDetail.location} 
          className="tour-details-two__location-map"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default DestinationsDetailsLeft;
