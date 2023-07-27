import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccountSideImage from "../../assets/png/AccountSideImage.png";
import Google_Icon from "../../assets/svg/Google_Icon.svg";

function CreateAccount() {
  return (
    <>
      <section className="pt-5 pb-lg-5 position-relative my-lg-5">
        <Container className="py-lg-5">
          <Row className=" justify-content-end">
            <Col xs={12}>
              <img
                className="w-100 w_md_50 position_md_absolute top-50 translate_middle_md_y start-0"
                src={AccountSideImage}
                alt="AccountSideImage"
              />
            </Col>
            <Col xs={12} md={6} lg={5} xl={4}>
              <h2 className=" ff_inter fw-medium fs_4xl text_dark pt-4">
                Create an account
              </h2>
              <h3 className=" ff_poppins fw-normal fs_lg text_dark">
                Enter your details below
              </h3>
              <from>
                <input
                  type="text"
                  className=" bg-transparent border_bottom border_bottom_dark py-1 mt-xl-5 mt-4 ff_poppins fw-normal fs_lg text_dark Create_from border-0 w-100"
                  placeholder="Name"
                />
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
                <button className=" w-100 ff_poppins fw-medium fs_lg py-3 bg_tertiary border-0 rounded-2 mt-xl-5 mt-4 text_primary">
                  Create Account
                </button>
                <button className=" w-100 ff_poppins fw-medium fs_lg py-3 border_semidark bg-transparent rounded-2 mt-4 text_dark">
                  <img className="me-3" src={Google_Icon} alt="Google_Icon" />{" "}
                  Sign up with Google
                </button>
              </from>
              <p className=" ff_poppins fw-normal fs_lg text_dark text-center mt-4">
                Already have account?{" "}
                <span className=" fw-medium border-3 border-bottom border-dark ms-2">
                  Log in
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CreateAccount;
