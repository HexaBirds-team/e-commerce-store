import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccountSideImage from "../../assets/png/AccountSideImage.png";
import Google_Icon from "../../assets/svg/Google_Icon.svg";

function LoginPages() {
  return (
    <>
      <section className="pt-5 pb-5 position-relative my-lg-5">
        <Container className="py-lg-5 pt-md-5">
          <Row className=" justify-content-end py-xl-5">
            <Col xs={12}>
              <img
                className="w-100 w_md_50 position_md_absolute top-50 translate_middle_md_y start-0"
                src={AccountSideImage}
                alt="AccountSideImage"
              />
            </Col>
            <Col xs={12} md={6} lg={5} xl={4} className="py-4">
              <h2 className=" ff_inter fw-medium fs_4xl text_dark pt-md-5">
                Log in to Exclusive
              </h2>
              <h3 className=" ff_poppins fw-normal fs_lg text_dark">
                Enter your details below
              </h3>
              <from>
                <input
                  type="text"
                  className=" bg-transparent border_bottom border_bottom_dark py-1 mt-xl-5 mt-4 ff_poppins fw-normal fs_lg text_dark Create_from border-0 w-100"
                  placeholder="Email or Phone Number"
                />
                <input
                  type="text"
                  className=" bg-transparent border_bottom border_bottom_dark py-1 mt-xl-5 mt-4 ff_poppins fw-normal fs_lg text_dark Create_from border-0 w-100"
                  placeholder="Password"
                />
                <div className=" d-flex align-items-center justify-content-between mt-xl-5 mt-4">
                  <button className="ff_poppins fw-medium fs_lg py-2 px-4 bg_tertiary border-0 rounded-2 text_primary">
                    Log In
                  </button>
                  <p className=" ff_poppins fw-normal fs_lg text_tertiary mb-0">
                    Forget Password?
                  </p>
                </div>
              </from>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LoginPages;
