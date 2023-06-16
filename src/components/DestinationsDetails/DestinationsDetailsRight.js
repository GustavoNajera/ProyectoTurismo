import { destinationsDetailsRight } from "@/data/destinationsDetails";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const {
  title,
  lists
} = destinationsDetailsRight;

const DestinationsDetailsRight = ({destinationDetail}) => {
  return (

    <div className="destinations-details__right">
      <div className="destinations-details__discount">
        <Image src={require(`@/images/destination/${destinationDetail.image}`).default.src} alt="" />
        <div className="destinations-details__discount-content">
          <h2>{destinationDetail.title}</h2>
          <h4>
            <span>{destinationDetail.subTitle}</span>
          </h4>
        </div>
      </div>

      {/*<div className="tour-details-two__last-minute tour-details-two__last-minute-2">
        <h3 className="tour-details-two__sidebar-title">{title}</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {lists.map(({ id, image, price, title, subtitle }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="tour-details-two__last-minute-content">
                <h6>Price negociable</h6>
                <h5>{title}</h5>
                <p>{subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      
    </div>
  );
};

export default DestinationsDetailsRight;
