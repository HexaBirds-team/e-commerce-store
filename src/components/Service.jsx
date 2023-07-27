import React from "react";
import FastDelivery from "../../src/assets/svg/FastDelivery.svg";
import CUSTOMER_SERVICE from "../../src/assets/svg/CUSTOMER_SERVICE.svg";
import MONEY_BACK_GUARANTEE from "../../src/assets/svg/MONEY_BACK_GUARANTEE.svg";
import { Col, Container, Row } from "react-bootstrap";

function Service() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} className="py-4">
              <div className=" text-center">
                <img src={FastDelivery} alt="FastDelivery" />
                <h2 className=" ff_poppins fw-semibold fs_xl text_dark pt-4">
                  FREE AND FAST DELIVERY{" "}
                </h2>
                <p className=" ff_poppins fw-normal fs_md textdark">
                  Free delivery for all orders over $140
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="py-4">
              <div className="text-center">
                <img src={CUSTOMER_SERVICE} alt="CUSTOMER_SERVICE" />
                <h2 className=" ff_poppins fw-semibold fs_xl text_dark pt-4">
                  24/7 CUSTOMER SERVICE
                </h2>
                <p className=" ff_poppins fw-normal fs_md textdark">
                  24/7 CUSTOMER SERVICE
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="py-4">
              <div className="text-center">
                <img src={MONEY_BACK_GUARANTEE} alt="MONEY_BACK_GUARANTEE" />
                <h2 className=" ff_poppins fw-semibold fs_xl text_dark pt-4">
                  MONEY BACK GUARANTEE
                </h2>
                <p className=" ff_poppins fw-normal fs_md textdark">
                  We reurn money within 30 days
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Service;
