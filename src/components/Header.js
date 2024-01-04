import React, { useState } from "react";
import Container from "../layouts/Container";
import { NAV_PRODUCTS, TASKS_1, TASKS_2 } from "../constants";

const Header = () => {
  const [tourHovered, setTourHovered] = useState(false);
  const [productsHovered, setProductsHovered] = useState(false);

  const handleTourMouseEnter = () => {
    setTourHovered(true);
  };

  const handleTourMouseLeave = () => {
    setTourHovered(false);
  };

  const handleProductsMouseEnter = () => {
    setProductsHovered(true);
  };

  const handleProductsMouseLeave = () => {
    setProductsHovered(false);
  };

  return (
    <div className="min-h-[90px] bg-white z-50 fixed top-0 left-0 right-0 shadow-header">
      <Container>
        <div className="px-5 w-[100%] flex justify-between items-center py-5  ">
          <img
            src="https://re-pos.in/wp-content/uploads/2019/10/re-pos_logo.png"
            alt="logo"
          />
          <div>
            <div className="flex list-none items-center">
              <div className="flex items-start px-5 gap-3">
                <li
                  onMouseEnter={handleTourMouseEnter}
                  onMouseLeave={handleTourMouseLeave}
                  className="relative cursor-pointer monserrat text-base-100 text-base font-normal outline-none text-left"
                >
                  Tour
                  {tourHovered && (
                    <div className="absolute grid grid-cols-2 py-2 px-3 gap-5 top-12 h-48 w-[720px] bg-white shadow-xl border border-gray-100">
                      <div className="col-span-1">
                        {TASKS_1 &&
                          TASKS_1.length > 0 &&
                          TASKS_1.map(({ title, id }, ind) => {
                            return (
                              <h2
                                key={id}
                                className="p-2 text-base font-normal tracking-wide text-gray-700"
                              >
                                {title}
                              </h2>
                            );
                          })}
                      </div>
                      <div className="col-span-1">
                        {TASKS_2 &&
                          TASKS_2.length > 0 &&
                          TASKS_2.map(({ title, id }, ind) => {
                            return (
                              <h2
                                key={id}
                                className="p-2 text-base font-normal tracking-wide text-gray-700"
                              >
                                {title}
                              </h2>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </li>
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
              </div>

              <div className="flex items-start px-5 gap-3">
                <li
                  onMouseEnter={handleProductsMouseEnter}
                  onMouseLeave={handleProductsMouseLeave}
                  className=" text-base-100 cursor-pointer text-base font-normal outline-none text-left"
                >
                  Products
                  {productsHovered && (
                    <div className="absolute grid grid-cols-2 py-2 px-3 gap-5 top-16 h-48 w-[720px] bg-white shadow-xl border border-gray-100">
                      <ul>
                        {NAV_PRODUCTS &&
                          NAV_PRODUCTS.length > 0 &&
                          NAV_PRODUCTS.map(({ title, id }, ind) => {
                            return (
                              <h2
                                key={id}
                                className="p-3 w-full text-base font-normal tracking-wide text-gray-700"
                              >
                                {title}
                              </h2>
                            );
                          })}
                      </ul>
                    </div>
                  )}
                </li>
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
              </div>

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
