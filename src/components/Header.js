import React from "react";
import Container from "../layouts/Container";

const Header = () => {
  return (
    <div className="min-h-[90px] bg-white z-50 fixed top-0 left-0 right-0 shadow-header">
      <Container>
        <div className=" w-[100%] flex justify-between items-center py-5  ">
          <img
            src="https://re-pos.in/wp-content/uploads/2019/10/re-pos_logo.png"
            alt="logo"
          />
          <div>
            <div className="flex list-none items-center">
              <li className="px-5 text-base-100 text-base font-normal outline-none text-left">
                Tour
              </li>
              <li className="px-5 text-base-100 text-base font-normal outline-none text-left">
                Products
              </li>
              <li className="px-5 text-base-100 text-base font-normal outline-none text-left">
                About
              </li>
              <li className="px-5 text-base-100 text-base font-normal outline-none text-left">
                RestroTrail
              </li>
              <li className="px-5 text-base-100 text-base font-normal outline-none text-left">
                Contact
              </li>
              <button className="cursor-pointer buttonPrimary  leading-10 px-5 bg-buttonPrimary rounded-md  text-white text-base outline-none text-left">
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
