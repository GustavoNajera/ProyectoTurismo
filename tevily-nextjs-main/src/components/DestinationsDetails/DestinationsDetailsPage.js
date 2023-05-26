import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DestinationsDetailsLeft from "./DestinationsDetailsLeft";
import DestinationsDetailsRight from "./DestinationsDetailsRight";

const DestinationsDetailsPage = ({destinationDetail}) => {
  return (
    <section className="destinations-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <DestinationsDetailsLeft destinationDetail={destinationDetail}/>
          </Col>
          <Col xl={4} lg={5}>
            <DestinationsDetailsRight destinationDetail={destinationDetail}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;
