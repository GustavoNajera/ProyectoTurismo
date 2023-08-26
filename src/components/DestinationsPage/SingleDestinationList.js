import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestinationList = ({ destination = {} }) => {
  const { image, title, subTitle, id} = destination;
  const col = 4;

  return (
      <Col xl={col} lg={col} md="4">
        <div className="destinations-one__single">
          <div className="destinations-one__img">
            <Image
              src={require(`@/images/destination/${image}`).default.src}
              alt=""
            />
            <div className="destinations-one__content">
              {subTitle && (
                <p className="destinations-one__sub-title">{subTitle}</p>
              )}
              <h2 className="destinations-one__title">
                <Link href={`/destinations/${id}`}>{title}</Link>
              </h2>
            </div>
            <div className="destinations-one__button">
              <a href={`/destinations/${id}`}>Details</a>
            </div>
          </div>
        </div>
      </Col>
  );
};

export default SingleDestinationList;
