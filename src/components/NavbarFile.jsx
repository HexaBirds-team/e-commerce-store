import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "../assets/svg/SearchIcon.svg";
import LikeButton from "../assets/svg/LikeButton.svg";
import soping from "../assets/svg/soping.svg";

function NavbarFile() {
  const [open, setOpen] = useState(false);
  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg_dark py-3">
        <Container className=" d-flex align-items-center justify-content-between">
          <p className=" ff_poppins text_primary mb-0 text-center fw-normal w-100">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a
              className=" text-decoration-underline ps-3 fw-semibold text_primary"
              href="#"
            >
              ShopNow
            </a>
          </p>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </div>
      <nav className="py-4 border_bottom_gray">
        <Container>
          <div className=" d-flex justify-content-between align-items-center">
            <span
              className="menu_icon d-flex flex-column me-3 d-lg-none"
              onClick={() => setOpen(true)}
            >
              <span className=" d-inline-block"></span>
              <span className=" d-inline-block my-2"></span>
              <span className=" d-inline-block"></span>
            </span>
            <h2 className=" ff_inter fw-bold fs_2xl text_dark mb-0 me-3">
              Exclusive
            </h2>
            <div
              className={
                open
                  ? " position-fixed top-0 start-0 bg_secondary min-vh-100 d-flex align-items-center justify-content-center w_320 transition_04 navbar_open"
                  : " position-fixed top-0 start-0 bg_secondary min-vh-100 d-flex align-items-center justify-content-center w_320 ms_n_320 transition_04 navbar_open"
              }
            >
              <ul className=" d-lg-flex align-items-center mb-0 ps-0">
                <li>
                  <a
                    className=" ff_poppins fw-normal fs_lg text_dark"
                    href="#"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className=" ff_poppins fw-normal fs_lg text_dark ms-lg-4 ms-xl-5 mt-5 mt-lg-0 d-inline-block"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className=" ff_poppins fw-normal fs_lg text_dark ms-lg-4 ms-xl-5 mt-5 mt-lg-0 d-inline-block"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className=" ff_poppins fw-normal fs_lg text_dark ms-lg-4 ms-xl-5 mt-5 mt-lg-0 d-inline-block"
                    href="#"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
            <div className=" d-flex align-items-center">
              <div className="d-none d-sm-flex align-items-center bg_secondary py-2 px-4 rounded-3">
                <input
                  type="search"
                  size={23}
                  className=" bg-transparent border-0"
                  placeholder="What are you looking for?"
                />
                <img className=" ps-3" src={SearchIcon} alt="SearchIcon" />
              </div>
              <img className="mx-3 mx-md-4" src={LikeButton} alt="" />
              <img src={soping} alt="soping" />
            </div>
          </div>
          <div className=" d-flex d-sm-none align-items-center justify-content-between mt-3 bg_secondary py-2 px-4 rounded-3">
            <input
              type="search"
              size={23}
              className=" bg-transparent border-0"
              placeholder="What are you looking for?"
            />
            <img className=" ps-3" src={SearchIcon} alt="SearchIcon" />
          </div>{" "}
        </Container>
      </nav>
    </>
  );
}

export default NavbarFile;
