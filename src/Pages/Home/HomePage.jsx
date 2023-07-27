import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import Apple_logo from "../../assets/svg/Apple_logo.svg";
import IconsArrowRight from "../../assets/svg/IconsArrowRight.svg";
import IPhoneImages from "../../assets/png/IPhoneImages.png";
import Gamepad from "../../assets/png/Gamepad.png";
import DogFood from "../../assets/png/DogFood.png";
import ElectricCar from "../../assets/png/ElectricCar.png";
import North_coat from "../../assets/png/North_coat.png";
import Jbl_shadow from "../../assets/png/Jbl_shadow.png";
import Speakers_shadow from "../../assets/png/Speakers_shadow.png";
import Speakers from "../../assets/png/Speakers.png";
import Perfume from "../../assets/png/Perfume.png";
import AttractiveWoman from "../../assets/png/AttractiveWoman.png";
import JBL_BOOMBOX from "../../assets/png/JBL_BOOMBOX.png";
import playstation_large from "../../assets/png/playstation_large.png";
import LikeButton from "../../assets/svg/LikeButton.svg";
import Quick_View from "../../assets/svg/Quick_View.svg";
import Fivestar from "../../assets/svg/Fivestar.svg";
import Service from "../../components/Service";

function HomePage() {
  const [days, setDays] = useState(0);
  const [hourds, setHourds] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const deadline = "july,31,2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHourds(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSecs(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col xs={3} className="pt-5 borderRight_gray">
              <div className="d-flex align-items-center justify-content-between pe-4">
                <p className=" ff_poppins fw-normal fs_lg text_dark mb-0">
                  Woman’s Fashion
                </p>
                <img src={ArrowLeft} alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between pe-4 mt-3">
                <p className=" ff_poppins fw-normal fs_lg text_dark mb-0">
                  Men’s Fashion
                </p>
                <img src={ArrowLeft} alt="" />
              </div>
              <p className=" ff_poppins fw-normal fs_lg text_dark mb-0 mt-3">
                Electronics
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_dark mb-0 mt-3">
                Home & Lifestyle
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_dark mb-0 mt-3">
                Medicine
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_dark mb-0 mt-3">
                Sports & Outdoor
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_dark mb-0 mt-3">
                Baby’s & Toys
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_dark mb-0 mt-3">
                Groceries & Pets
              </p>
              <p className=" ff_poppins fw-normal fs_lg text_dark mb-0 mt-3">
                Health & Beauty
              </p>
            </Col>
            <Col xs={9}>
              <div className=" bg_dark py-4 px-xxl-5 px-4 mx-5 mt-5">
                <Row className=" align-items-center">
                  <Col xs={5}>
                    <div className=" d-flex align-items-center">
                      <img src={Apple_logo} alt="Apple_logo" />
                      <p className=" ff_poppins fw-normal fs_lg text_primary mb-0 ms-4">
                        iPhone 14 Series
                      </p>
                    </div>
                    <h1 className=" ff_inter fw-semibold fs_5xl text_primary pt-4">
                      Up to 10% <span className=" d-xl-block">off Voucher</span>
                    </h1>
                    <button className=" ff_poppins fw-medium fs_lg text_primary bg-transparent border-0 mt-4">
                      Shop Now
                      <img
                        className=" ps-4"
                        src={IconsArrowRight}
                        alt="IconsArrowRight"
                      />
                    </button>
                  </Col>
                  <Col xs={7}>
                    <img className="w-100" src={IPhoneImages} alt="phone" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container className="py-5 mt-5">
          <div className="d-flex align-items-center">
            <span className=" rounded-2 h_40 w_20  bg_tertiary d-inline-block "></span>
            <h2 className=" ff_poppins fw-semibold fs_lg text_tertiary startBorder_tertiary mb-0 ps-3">
              Today’s
            </h2>
          </div>
          <div className="pt-4 pb-5 d-flex align-items-center">
            <h2 className=" ff_inter fw-semibold fs_4xl text_dark mb-0">
              Flash Sales
            </h2>
            <div className=" d-flex align-items-center ps-5">
              <div className="ps-5">
                <h2 className=" ff_poppins fw-medium fs_sm text_dark">Days</h2>
                <h3 className=" ff_inter fw-bold fs_3xl text dark">
                  {days < 10 ? "0" + days : days}
                </h3>
              </div>
              <div className=" d-flex flex-column ps-3 pt-2">
                <span className=" time_dot d-inline-block rounded-circle"></span>
                <span className=" time_dot d-inline-block rounded-circle mt-2"></span>
              </div>
              <div className="ps-3">
                <h2 className=" ff_poppins fw-medium fs_sm text_dark">Hours</h2>
                <h3 className=" ff_inter fw-bold fs_3xl text dark">
                  {hourds < 10 ? "0" + hourds : hourds}
                </h3>
              </div>
              <div className=" d-flex flex-column ps-3 pt-2">
                <span className=" time_dot d-inline-block rounded-circle"></span>
                <span className=" time_dot d-inline-block rounded-circle mt-2"></span>
              </div>
              <div className="ps-3">
                <h2 className=" ff_poppins fw-medium fs_sm text_dark">
                  Minutes
                </h2>
                <h3 className=" ff_inter fw-bold fs_3xl text dark">
                  {mins < 10 ? "0" + mins : mins}
                </h3>
              </div>
              <div className=" d-flex flex-column ps-3 pt-2">
                <span className=" time_dot d-inline-block rounded-circle"></span>
                <span className=" time_dot d-inline-block rounded-circle mt-2"></span>
              </div>
              <div className="ps-3">
                <h2 className=" ff_poppins fw-medium fs_sm text_dark">
                  Seconds
                </h2>
                <h3 className=" ff_inter fw-bold fs_3xl text dark">
                  {secs < 10 ? "0" + secs : secs}
                </h3>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            <div className="px-3 hover_cart">
              <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                <div className="p-5">
                  <img className="w-100" src={Gamepad} alt="Gamepad" />
                  <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                    <img src={LikeButton} alt="LikeButton" />
                  </div>
                  <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                    <img src={Quick_View} alt="Quick_View" />
                  </div>
                  <button className=" py-1 px-3 bg_tertiary border-0 ff_poppins fw-normal fs_xsm text_primary rounded-1 position-absolute discount_button">
                    - 40%
                  </button>
                </div>
                <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                  Add To Cart
                </button>
              </div>
              <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                HAVIT HV-G92 Gamepad
              </h2>
              <div className="d-flex">
                <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                  $120
                </span>
                <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                  $160
                </span>
              </div>
              <div className=" d-flex align-items-center pt-2">
                <img src={Fivestar} alt="Five star" />
                <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                  ( 88 )
                </span>
              </div>
            </div>
            <div className="px-3 hover_cart">
              <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                <div className="p-5">
                  <img className="w-100" src={Gamepad} alt="Gamepad" />
                  <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                    <img src={LikeButton} alt="LikeButton" />
                  </div>
                  <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                    <img src={Quick_View} alt="Quick_View" />
                  </div>
                  <button className=" py-1 px-3 bg_tertiary border-0 ff_poppins fw-normal fs_xsm text_primary rounded-1 position-absolute discount_button">
                    - 40%
                  </button>
                </div>
                <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                  Add To Cart
                </button>
              </div>
              <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                HAVIT HV-G92 Gamepad
              </h2>
              <div className="d-flex">
                <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                  $120
                </span>
                <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                  $160
                </span>
              </div>
              <div className=" d-flex align-items-center pt-2">
                <img src={Fivestar} alt="Five star" />
                <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                  ( 88 )
                </span>
              </div>
            </div>
            <div className="px-3 hover_cart">
              <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                <div className="p-5">
                  <img className="w-100" src={Gamepad} alt="Gamepad" />
                  <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                    <img src={LikeButton} alt="LikeButton" />
                  </div>
                  <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                    <img src={Quick_View} alt="Quick_View" />
                  </div>
                  <button className=" py-1 px-3 bg_tertiary border-0 ff_poppins fw-normal fs_xsm text_primary rounded-1 position-absolute discount_button">
                    - 40%
                  </button>
                </div>
                <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                  Add To Cart
                </button>
              </div>
              <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                HAVIT HV-G92 Gamepad
              </h2>
              <div className="d-flex">
                <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                  $120
                </span>
                <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                  $160
                </span>
              </div>
              <div className=" d-flex align-items-center pt-2">
                <img src={Fivestar} alt="Five star" />
                <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                  ( 88 )
                </span>
              </div>
            </div>
            <div className="px-3 hover_cart">
              <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                <div className="p-5">
                  <img className="w-100" src={Gamepad} alt="Gamepad" />
                  <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                    <img src={LikeButton} alt="LikeButton" />
                  </div>
                  <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                    <img src={Quick_View} alt="Quick_View" />
                  </div>
                  <button className=" py-1 px-3 bg_tertiary border-0 ff_poppins fw-normal fs_xsm text_primary rounded-1 position-absolute discount_button">
                    - 40%
                  </button>
                </div>
                <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                  Add To Cart
                </button>
              </div>
              <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                HAVIT HV-G92 Gamepad
              </h2>
              <div className="d-flex">
                <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                  $120
                </span>
                <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                  $160
                </span>
              </div>
              <div className=" d-flex align-items-center pt-2">
                <img src={Fivestar} alt="Five star" />
                <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                  ( 88 )
                </span>
              </div>
            </div>
            <div className="px-3 hover_cart">
              <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                <div className="p-5">
                  <img className="w-100" src={Gamepad} alt="Gamepad" />
                  <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                    <img src={LikeButton} alt="LikeButton" />
                  </div>
                  <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                    <img src={Quick_View} alt="Quick_View" />
                  </div>
                  <button className=" py-1 px-3 bg_tertiary border-0 ff_poppins fw-normal fs_xsm text_primary rounded-1 position-absolute discount_button">
                    - 40%
                  </button>
                </div>
                <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                  Add To Cart
                </button>
              </div>
              <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                HAVIT HV-G92 Gamepad
              </h2>
              <div className="d-flex">
                <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                  $120
                </span>
                <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                  $160
                </span>
              </div>
              <div className=" d-flex align-items-center pt-2">
                <img src={Fivestar} alt="Five star" />
                <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                  ( 88 )
                </span>
              </div>
            </div>
          </Slider>
          <div className=" text-center pt-5 ">
            <button className=" ff_poppins fw-medium fs_lg text_primary bg_tertiary border-0 py-3 px-5">
              View All Products
            </button>
          </div>
        </Container>
      </section>
      <section className=" py-5">
        <Container className="border_bottom_gray pb-5">
          <div className="d-flex align-items-center">
            <span className=" rounded-2 h_40 w_20  bg_tertiary d-inline-block "></span>
            <h2 className=" ff_poppins fw-semibold fs_lg text_tertiary startBorder_tertiary mb-0 ps-3">
              Categories
            </h2>
          </div>
          <h2 className=" ff_inter fw-semibold fs_4xl text_dark mb-0 mt-4">
            Browse By Category
          </h2>
          <Row className="pt-4">
            <Col xs={6} sm={4} lg={2} className="pt-4">
              <div className=" text-center py-4 Categories_card rounded-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_884_4367)">
                      <path
                        className="stroke"
                        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M25.6667 7H31.1354"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M28 44.0052V44.0305"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="15.1667"
                        y1="39.8334"
                        x2="40.8333"
                        y2="39.8334"
                        stroke="black"
                        stroke-width="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_4367">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h2 className=" ff_poppins fw-normal fs_lg text_dark pt-3">
                  Phones
                </h2>
              </div>
            </Col>
            <Col xs={6} sm={4} lg={2} className="pt-4">
              <div className=" text-center py-4 Categories_card rounded-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_884_4367)">
                      <path
                        className="stroke"
                        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M25.6667 7H31.1354"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M28 44.0052V44.0305"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="15.1667"
                        y1="39.8334"
                        x2="40.8333"
                        y2="39.8334"
                        stroke="black"
                        stroke-width="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_4367">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h2 className=" ff_poppins fw-normal fs_lg text_dark pt-3">
                  Phones
                </h2>
              </div>
            </Col>
            <Col xs={6} sm={4} lg={2} className="pt-4">
              <div className=" text-center py-4 Categories_card rounded-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_884_4367)">
                      <path
                        className="stroke"
                        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M25.6667 7H31.1354"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M28 44.0052V44.0305"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="15.1667"
                        y1="39.8334"
                        x2="40.8333"
                        y2="39.8334"
                        stroke="black"
                        stroke-width="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_4367">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h2 className=" ff_poppins fw-normal fs_lg text_dark pt-3">
                  Phones
                </h2>
              </div>
            </Col>
            <Col xs={6} sm={4} lg={2} className="pt-4">
              <div className=" text-center py-4 Categories_card rounded-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_884_4367)">
                      <path
                        className="stroke"
                        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M25.6667 7H31.1354"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M28 44.0052V44.0305"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="15.1667"
                        y1="39.8334"
                        x2="40.8333"
                        y2="39.8334"
                        stroke="black"
                        stroke-width="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_4367">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h2 className=" ff_poppins fw-normal fs_lg text_dark pt-3">
                  Phones
                </h2>
              </div>
            </Col>
            <Col xs={6} sm={4} lg={2} className="pt-4">
              <div className=" text-center py-4 Categories_card rounded-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_884_4367)">
                      <path
                        className="stroke"
                        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M25.6667 7H31.1354"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M28 44.0052V44.0305"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="15.1667"
                        y1="39.8334"
                        x2="40.8333"
                        y2="39.8334"
                        stroke="black"
                        stroke-width="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_4367">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h2 className=" ff_poppins fw-normal fs_lg text_dark pt-3">
                  Phones
                </h2>
              </div>
            </Col>
            <Col xs={6} sm={4} lg={2} className="pt-4">
              <div className=" text-center py-4 Categories_card rounded-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_884_4367)">
                      <path
                        className="stroke"
                        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M25.6667 7H31.1354"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="stroke"
                        d="M28 44.0052V44.0305"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="15.1667"
                        y1="39.8334"
                        x2="40.8333"
                        y2="39.8334"
                        stroke="black"
                        stroke-width="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_4367">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h2 className=" ff_poppins fw-normal fs_lg text_dark pt-3">
                  Phones
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <div className="d-flex align-items-center">
            <span className=" rounded-2 h_40 w_20  bg_tertiary d-inline-block "></span>
            <h2 className=" ff_poppins fw-semibold fs_lg text_tertiary startBorder_tertiary mb-0 ps-3">
              This Month
            </h2>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h2 className=" ff_inter fw-semibold fs_4xl text_dark mb-0">
              Best Selling Products
            </h2>
            <button className=" bg_tertiary text_primary border-0 ff_poppins fw-medium fs_lg py-3 px-5">
              View All
            </button>
          </div>
          <Row className=" pt-4">
            <Col xs={6} md={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-xl-5 p-4">
                    <img className="w-100" src={North_coat} alt="North_coat" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  The north coat
                </h2>
                <div className="d-flex">
                  <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                    $260
                  </span>
                  <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                    $360
                  </span>
                </div>
                <div className=" d-flex align-items-center pt-2">
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img className="w-100" src={North_coat} alt="North_coat" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  The north coat
                </h2>
                <div className="d-flex">
                  <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                    $260
                  </span>
                  <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                    $360
                  </span>
                </div>
                <div className=" d-flex align-items-center pt-2">
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img className="w-100" src={North_coat} alt="North_coat" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  The north coat
                </h2>
                <div className="d-flex">
                  <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                    $260
                  </span>
                  <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                    $360
                  </span>
                </div>
                <div className=" d-flex align-items-center pt-2">
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img className="w-100" src={North_coat} alt="North_coat" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  The north coat
                </h2>
                <div className="d-flex">
                  <span className=" ff_poppins fw-medium fs_lg text_tertiary">
                    $260
                  </span>
                  <span className=" ff_poppins fw-medium fs_lg text_dark text-decoration-line-through opacity-50 ms-3">
                    $360
                  </span>
                </div>
                <div className=" d-flex align-items-center pt-2">
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 overflow-hidden">
        <Container className="px-0">
          <div className=" bg_dark p-3 p-sm-5">
            <Row className=" align-items-center flex-column-reverse flex-md-row">
              <Col xs={12} md={6} className="position-relative z-1 pt-5">
                <h2 className=" ff_poppins fw-semibold fs_lg text_bold">
                  Categories
                </h2>
                <h2 className=" ff_inter fw-semibold fs_5xl text_primary py-4">
                  Enhance Your{" "}
                  <span className=" d-block">Music Experience</span>
                </h2>
                <div className=" d-flex align-items-center pb-3">
                  <div className=" d-flex align-items-center justify-content-center time_div bg_primary flex-column rounded-circle">
                    <h2 className=" ff_poppins fw-semibold fs_lg text_dark mb-0">
                      23
                    </h2>
                    <p className=" ff_poppins fw-normal fs_xsm mb-0 text_dark">
                      Days
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-center time_div bg_primary flex-column rounded-circle ms-3 ms-lg-4">
                    <h2 className=" ff_poppins fw-semibold fs_lg text_dark mb-0">
                      23
                    </h2>
                    <p className=" ff_poppins fw-normal fs_xsm mb-0 text_dark">
                      Hours
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-center time_div bg_primary flex-column rounded-circle ms-3 ms-lg-4">
                    <h2 className=" ff_poppins fw-semibold fs_lg text_dark mb-0">
                      23
                    </h2>
                    <p className=" ff_poppins fw-normal fs_xsm mb-0 text_dark">
                      Minutes
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-center time_div bg_primary flex-column rounded-circle ms-3 ms-lg-4">
                    <h2 className=" ff_poppins fw-semibold fs_lg text_dark mb-0">
                      23
                    </h2>
                    <p className=" ff_poppins fw-normal fs_xsm mb-0 text_dark">
                      Seconds
                    </p>
                  </div>
                </div>
                <button className=" ff_poppins fw-medium fs_lg text_primary border-0 rounded-2 bg_bold py-3 px-5 mt-4">
                  Buy Now!
                </button>
              </Col>
              <Col xs={12} md={6} className=" position-relative">
                <img
                  className="w-100 position-relative z-1"
                  src={JBL_BOOMBOX}
                  alt="JBL_BOOMBOX"
                />
                <img
                  className=" position-absolute top-50 start-50 translate-middle"
                  src={Jbl_shadow}
                  alt="Jbl_shadow"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <div className="d-flex align-items-center">
            <span className=" rounded-2 h_40 w_20  bg_tertiary d-inline-block "></span>
            <h2 className=" ff_poppins fw-semibold fs_lg text_tertiary startBorder_tertiary mb-0 ps-3">
              Our Products
            </h2>
          </div>
          <h2 className=" ff_inter fw-semibold fs_4xl text_dark mb-0 mt-4">
            Explore Our Products
          </h2>
          <Row className="pt-4">
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img className="w-100" src={DogFood} alt="DogFood" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Breed Dry Dog Food
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $100
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 88 )
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img className="w-100" src={DogFood} alt="DogFood" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Breed Dry Dog Food
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $100
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 88 )
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img className="w-100" src={DogFood} alt="DogFood" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Breed Dry Dog Food
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $100
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 88 )
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img className="w-100" src={DogFood} alt="DogFood" />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Breed Dry Dog Food
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $100
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 88 )
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img
                      className="w-100"
                      src={ElectricCar}
                      alt="ElectricCar"
                    />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                  <button className=" py-1 px-3 bg_bold border-0 ff_poppins fw-normal fs_xsm text_primary rounded-1 position-absolute discount_button  text-uppercase">
                    new
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Kids Electric Car
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $960
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
                <div className="pt-4 d-flex">
                  <span className="colors_dots d-flex align-items-center justify-content-center rounded-circle border_dark">
                    <span className="colors_dots2 rounded-circle d-inline-block bg_light "></span>
                  </span>
                  <span className="colors_dots rounded-circle d-inline-block bg_light ms-3"></span>
                </div>
              </div>
            </Col>
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img
                      className="w-100"
                      src={ElectricCar}
                      alt="ElectricCar"
                    />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Kids Electric Car
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $960
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
                <div className="pt-4 d-flex">
                  <span className="colors_dots d-flex align-items-center justify-content-center rounded-circle border_dark">
                    <span className="colors_dots2 rounded-circle d-inline-block bg_light "></span>
                  </span>
                  <span className="colors_dots rounded-circle d-inline-block bg_light ms-3"></span>
                </div>
              </div>
            </Col>
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img
                      className="w-100"
                      src={ElectricCar}
                      alt="ElectricCar"
                    />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                  <button className=" py-1 px-3 bg_bold border-0 ff_poppins fw-normal fs_xsm text_primary rounded-1 position-absolute discount_button  text-uppercase">
                    new
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Kids Electric Car
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $960
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
                <div className="pt-4 d-flex">
                  <span className="colors_dots d-flex align-items-center justify-content-center rounded-circle border_dark">
                    <span className="colors_dots2 rounded-circle d-inline-block bg_light "></span>
                  </span>
                  <span className="colors_dots rounded-circle d-inline-block bg_light ms-3"></span>
                </div>
              </div>
            </Col>
            <Col xs={3} className="pt-5">
              <div className="hover_cart">
                <div className=" bg_secondary rounded-3 position-relative overflow-hidden">
                  <div className="p-5">
                    <img
                      className="w-100"
                      src={ElectricCar}
                      alt="ElectricCar"
                    />
                    <div className="LikeButton LikeButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center cursor_pointer">
                      <img src={LikeButton} alt="LikeButton" />
                    </div>
                    <div className="LikeButton QuickButton_position position-absolute bg_primary rounded-circle d-flex align-items-center justify-content-center mt-3 cursor_pointer">
                      <img src={Quick_View} alt="Quick_View" />
                    </div>
                  </div>
                  <button className=" text-capitalize ff_poppins fw-medium fs_lg w-100 position-absolute bg_dark text_primary py-2 Add_Card">
                    Add To Cart
                  </button>
                </div>
                <h2 className=" ff_poppins fw-medium fs_lg text_dark pt-3">
                  Kids Electric Car
                </h2>
                <div className=" d-flex align-items-center pt-2">
                  <p className=" ff_poppins fw-medium fs_lg text_tertiary mb-0 me-2">
                    $960
                  </p>
                  <img src={Fivestar} alt="Five star" />
                  <span className=" ff_poppins fw-semibold fs_sm text_dark opacity-50 ms-3 pt-1">
                    ( 65 )
                  </span>
                </div>
                <div className="pt-4 d-flex">
                  <span className="colors_dots d-flex align-items-center justify-content-center rounded-circle border_dark">
                    <span className="colors_dots2 rounded-circle d-inline-block bg_light "></span>
                  </span>
                  <span className="colors_dots rounded-circle d-inline-block bg_light ms-3"></span>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" text-center pt-5 ">
            <button className=" ff_poppins fw-medium fs_lg text_primary bg_tertiary border-0 py-3 px-5">
              View All Products
            </button>
          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <div className="d-flex align-items-center">
            <span className=" rounded-2 h_40 w_20  bg_tertiary d-inline-block "></span>
            <h2 className=" ff_poppins fw-semibold fs_lg text_tertiary startBorder_tertiary mb-0 ps-3">
              Our Products
            </h2>
          </div>
          <h2 className=" ff_inter fw-semibold fs_4xl text_dark mb-0 mt-4">
            Explore Our Products
          </h2>
          <Row className="pt-5">
            <Col xs={12} lg={6} className="pb-4 pb-lg-0">
              <div className=" bg_dark px-4 rounded-2">
                <div className=" pt-4 mx-2 position-relative">
                  <img
                    className="w-100"
                    src={playstation_large}
                    alt="playstation_large"
                  />
                  <div className=" position-absolute PlayStation_position start-0">
                    <h2 className=" ff_inter fw-semibold fs_2xl text_secondary mb-0">
                      PlayStation 5
                    </h2>
                    <p className=" ff_poppins fw-normal fs_md text_secondary mb-0 py-3">
                      Black and White version of the PS5{" "}
                      <span className=" d-block">coming out on sale.</span>
                    </p>
                    <a
                      href="#"
                      className=" ff_poppins fw-medium fs_lg text_secondary border_bottom_secondary"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className=" h-100 d-flex flex-column justify-content-between">
                <div className=" bg_dark pt-sm-5 px-sm-2 rounded-2">
                  <Row className=" position-relative mx-2 justify-content-end">
                    <div className=" position-absolute PlayStation_position start-0">
                      <h2 className=" ff_inter fw-semibold fs_2xl text_secondary mb-0">
                        Women’s Collections
                      </h2>
                      <p className=" ff_poppins fw-normal fs_md text_secondary mb-0 py-3">
                        Featured woman collections that
                        <span className=" d-block">
                          {" "}
                          give you another vibe.
                        </span>
                      </p>
                      <a
                        href="#"
                        className=" ff_poppins fw-medium fs_lg text_secondary border_bottom_secondary"
                      >
                        Shop Now
                      </a>
                    </div>
                    <Col xs={12} sm={7} className="p-0">
                      <img
                        className="w-100"
                        src={AttractiveWoman}
                        alt="AttractiveWoman"
                      />
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col xs={12} sm={6} className=" pt-4">
                    <div className=" bg_dark pt-4 px-4 rounded-2 position-relative">
                      <div className=" mx-2 pb-3 position-relative z-1">
                        <img className="w-100" src={Speakers} alt="Speakers" />
                        <div className=" position-absolute PlayStation_position start-0">
                          <h2 className=" ff_inter fw-semibold fs_2xl text_secondary mb-0">
                            Speakers
                          </h2>
                          <p className=" ff_poppins fw-normal fs_md text_secondary mb-0 py-2  ">
                            Amazon wireless speakers
                          </p>
                          <a
                            href="#"
                            className=" ff_poppins fw-medium fs_lg text_secondary border_bottom_secondary"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                      <img
                        className=" position-absolute top-50 start-50 translate-middle w-100"
                        src={Speakers_shadow}
                        alt="shadow"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={6} className=" pt-4">
                    <div className=" bg_dark pt-4 px-4 rounded-2 position-relative">
                      <div className=" mx-2 pb-3 position-relative z-1">
                        <img className="w-100" src={Perfume} alt="Perfume" />
                        <div className=" position-absolute PlayStation_position start-0">
                          <h2 className=" ff_inter fw-semibold fs_2xl text_secondary mb-0">
                            Perfume
                          </h2>
                          <p className=" ff_poppins fw-normal fs_md text_secondary mb-0 py-2  ">
                            GUCCI INTENSE OUD EDP
                          </p>
                          <a
                            href="#"
                            className=" ff_poppins fw-medium fs_lg text_secondary border_bottom_secondary"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                      <img
                        className=" position-absolute top-50 start-50 translate-middle w-100"
                        src={Speakers_shadow}
                        alt="shadow"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Service />
    </>
  );
}

export default HomePage;
