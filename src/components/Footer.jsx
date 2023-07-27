import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IconSend from "../../src/assets/svg/IconSend.svg";
import Qrcode from "../../src/assets/svg/Qrcode.svg";
import GooglePlay from "../../src/assets/svg/GooglePlay.svg";
import AppStore from "../../src/assets/svg/AppStore.svg";
import Facebook_Icon from "../../src/assets/svg/Facebook_Icon.svg";
import Twitter_Icon from "../../src/assets/svg/Twitter_Icon.svg";
import instagram_Icon from "../../src/assets/svg/instagram_Icon.svg";
import Linkedin_Icon from "../../src/assets/svg/Linkedin_Icon.svg";
import icon_copyright from "../../src/assets/svg/icon_copyright.svg";

function Footer() {
  return (
    <>
      <footer className=" bg_dark mt-lg-5 pt-5">
        <Container>
          <Row>
            <Col lg={3} md={5} sm={6} xs={12} className="pt-4">
              <h2 className=" ff_inter fw-bold fs_2xl text_secondary">
                Exclusive
              </h2>
              <h3 className=" ff_poppins fw-medium fs_xl text_secondary mt-3">
                Subscribe
              </h3>
              <p className=" ff_poppins fw-normal fs_lg text_secondary">
                Get 10% off your first order
              </p>
              <div className=" d-flex align-items-center border_secondary py-2 px-3 max_240">
                <form>
                  <input
                    className=" bg-transparent border-0 text_secondary"
                    type="text"
                    placeholder="Enter your email"
                  />
                </form>
                <img src={IconSend} alt="IconSend" />
              </div>
            </Col>
            <Col lg={2} md={4} sm={6} xs={12} className="pt-4">
              <h2 className=" ff_inter fw-bold fs_2xl text_secondary">
                Support
              </h2>
              <p className=" ff_poppins fw-normal fs_lg text_secondary mt-3">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_secondary">
                exclusive@gmail.com
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_secondary">
                +88015-88888-9999
              </p>
            </Col>
            <Col lg={2} md={3} xs={6} className="pt-4">
              <ul className="p-0 ps-md-5">
                <li className=" ff_inter fw-bold fs_2xl text_secondary">
                  Account
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    Login / Register
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={5} xs={6} className="pt-4">
              <ul className="p-0 ps-md-5">
                <li className=" ff_inter fw-bold fs_2xl text_secondary">
                  Quick Link
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" ff_poppins fw-normal fs_lg text_secondary mt-3 d-inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={4} sm={6} xs={12} className="pt-4">
              <h2 className=" ff_inter fw-bold fs_2xl text_secondary">
                Download App
              </h2>
              <p className=" ff_poppins fw-medium fs_sm text_primary opacity-75 mt-3">
                Save $3 with App New User Only
              </p>
              <div className=" d-flex ">
                <img src={Qrcode} alt="Qrcode" />
                <div className=" ps-2">
                  <img src={GooglePlay} alt="GooglePlay" />
                  <img src={AppStore} alt="AppStore" />
                </div>
              </div>
              <div className=" d-flex align-items-center justify-content-between mt-4">
                <a href="">
                  <img src={Facebook_Icon} alt="Facebook_Icon" />
                </a>
                <a href="">
                  <img src={Twitter_Icon} alt="Twitter_Icon" />
                </a>
                <a href="">
                  <img src={instagram_Icon} alt="instagram_Icon" />
                </a>
                <a href="">
                  <img src={Linkedin_Icon} alt="Linkedin_Icon" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        
          <p className=" ff_poppins fw-normal fs_lg text_primary opacity-50 text-center border_top mb-0 mt-5 py-3
          "> 
            <img src={icon_copyright} alt="icon_copyright" /> Copyright Rimel
            2023. All right reserved
          </p>
      </footer>
    </>
  );
}

export default Footer;
