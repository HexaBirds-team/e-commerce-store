import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RGB_CPU from "../../assets/png/RGB_CPU.png";
import Cart_Icon from "../../assets/svg/Cart_Icon.svg";
import Deleded from "../../assets/svg/Deleded.svg";

function WishlistPage() {
  return (
    <>
      <section className="py-5">
        <Container>
          <div className=" d-flex justify-content-between align-items-center">
            <h2 className=" ff_poppins fw-normal fs_xl text_dark mb-0">
              Wishlist (4)
            </h2>
            <button className=" ff_poppins fs_lg py-3 px-5 fw-medium bg-transparent text_dark border_dark rounded-2">
              {" "}
              Move All To Bag
            </button>
          </div>
          <Row className="pt-4">
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div className="px-xxl-5 px-4 bg_secondary py-3 rounded-top position-relative">
                <img className="w-100" src={RGB_CPU} alt="cpu" />
                <img
                  className=" position-absolute LikeButton_position"
                  src={Deleded}
                  alt="Deleded"
                />
              </div>
              <button className=" ff_poppins fw-normal fs_sm text_primary bg_dark w-100 py-2 rounded-bottom">
                <img src={Cart_Icon} alt="Cart_Icon" /> Add To Cart
              </button>
              <p className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                RGB liquid CPU Cooler
              </p>
              <p className=" ff_poppins fw-medium fs_lg text_tertiary">$1960</p>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div className="px-xxl-5 px-4 bg_secondary py-3 rounded-top position-relative">
                <img className="w-100" src={RGB_CPU} alt="cpu" />
                <img
                  className=" position-absolute LikeButton_position"
                  src={Deleded}
                  alt="Deleded"
                />
              </div>
              <button className=" ff_poppins fw-normal fs_sm text_primary bg_dark w-100 py-2 rounded-bottom">
                <img src={Cart_Icon} alt="Cart_Icon" /> Add To Cart
              </button>
              <p className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                RGB liquid CPU Cooler
              </p>
              <p className=" ff_poppins fw-medium fs_lg text_tertiary">$1960</p>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div className="px-xxl-5 px-4 bg_secondary py-3 rounded-top position-relative">
                <img className="w-100" src={RGB_CPU} alt="cpu" />
                <img
                  className=" position-absolute LikeButton_position"
                  src={Deleded}
                  alt="Deleded"
                />
              </div>
              <button className=" ff_poppins fw-normal fs_sm text_primary bg_dark w-100 py-2 rounded-bottom">
                <img src={Cart_Icon} alt="Cart_Icon" /> Add To Cart
              </button>
              <p className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                RGB liquid CPU Cooler
              </p>
              <p className=" ff_poppins fw-medium fs_lg text_tertiary">$1960</p>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div className="px-xxl-5 px-4 bg_secondary py-3 rounded-top position-relative">
                <img className="w-100" src={RGB_CPU} alt="cpu" />
                <img
                  className=" position-absolute LikeButton_position"
                  src={Deleded}
                  alt="Deleded"
                />
              </div>
              <button className=" ff_poppins fw-normal fs_sm text_primary bg_dark w-100 py-2 rounded-bottom">
                <img src={Cart_Icon} alt="Cart_Icon" /> Add To Cart
              </button>
              <p className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                RGB liquid CPU Cooler
              </p>
              <p className=" ff_poppins fw-medium fs_lg text_tertiary">$1960</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WishlistPage;
