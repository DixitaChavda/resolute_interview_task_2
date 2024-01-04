import React from "react";
import Container from "../layouts/Container";
import {
  APPLICATIONS,
  CITIES,
  COUNTRIES,
  GET_IN_TOUCH,
  IMAGES,
  IMAGES_2,
  PRODUCTS,
  QUICK_LINKS,
  WEB_ICONS,
} from "../constants";

const Footer = () => {
  return (
    <div className="bg-dark-100 text-white ">
      <Container>
        <div className="grid grid-col-3 gap-5 footer pt-50 pb-30">
          <div className="col-span-1">
            <h1 className="text-2xl font-bold mb-2">Applications</h1>
            <ul>
              {APPLICATIONS &&
                APPLICATIONS.length > 0 &&
                APPLICATIONS.map(({ title, id }, ind) => {
                  return (
                    <div key={id} className=" flex items-center gap-3">
                      <i className="fas fa-angle-right"></i>
                      <li className="py-7.5">{title}</li>
                    </div>
                  );
                })}
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl font-bold mb-2">Products</h1>
            <ul>
              {PRODUCTS &&
                PRODUCTS.length > 0 &&
                PRODUCTS.map(({ id, title }, ind) => {
                  return (
                    <div key={id} className=" flex items-center gap-3">
                      <i className="fas fa-angle-right"></i>
                      <li className="py-7.5">{title}</li>
                    </div>
                  );
                })}
            </ul>
            <h1 className="text-2xl font-bold mb-2">Quick Links</h1>
            <ul>
              {QUICK_LINKS &&
                QUICK_LINKS.length > 0 &&
                QUICK_LINKS.map(({ id, title }, ind) => {
                  return (
                    <div key={id} className=" flex items-center gap-3">
                      <i className="fas fa-angle-right"></i>

                      <li className="py-7.5">{title}</li>
                    </div>
                  );
                })}
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl font-bold mb-2">Get In Touch</h1>
            <ul>
              {GET_IN_TOUCH &&
                GET_IN_TOUCH.length > 0 &&
                GET_IN_TOUCH.map(({ icon, id, title }, index) => {
                  return (
                    <li key={index} className="py-7.5 flex items-center gap-10">
                      <i class={icon}></i> <h1>{title}</h1>
                    </li>
                  );
                })}
            </ul>

            <ul className="flex items-center gap-3 my-3.75">
              {WEB_ICONS &&
                WEB_ICONS.length > 0 &&
                WEB_ICONS.map(({ id, icon }, index) => {
                  return (
                    <span
                      key={id}
                      className="px-10 py-1.5 border border-white rounded-full"
                    >
                      <i class={icon}></i>
                    </span>
                  );
                })}
            </ul>
            <div className="flex items-center gap-6.25 my-3.75">
              {IMAGES &&
                IMAGES.length > 0 &&
                IMAGES.map(({ id, image }, ind) => {
                  return (
                    <img
                      key={id}
                      className="w-[30px] h-[30px]"
                      src={image}
                      alt="flag"
                    />
                  );
                })}
            </div>
            <div className="flex items-center gap-[17px] my-15">
              {IMAGES_2 &&
                IMAGES_2.length > 0 &&
                IMAGES_2.map(({ id, image }, ind) => {
                  return (
                    <img className="w-[30px] h-[30px]" src={image} alt="flag" />
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
      <div className="border-b w-full border-white"></div>
      <Container>
        <div className="flex justify-center items-center">
          {CITIES &&
            CITIES.length > 0 &&
            CITIES.map(({ id, title }, index) => {
              return (
                <li
                  key={id}
                  className="py-10 list-none text-base font-normal px-4.25"
                >
                  {title}
                </li>
              );
            })}
        </div>
        <div className="mb-5"> </div>
        <div className="flex justify-center items-center">
          {COUNTRIES &&
            COUNTRIES.length > 0 &&
            COUNTRIES.map(({ id, title }, index) => {
              return (
                <li
                  key={id}
                  className="py-10 list-none text-base font-normal px-4.25"
                >
                  {title}
                </li>
              );
            })}
        </div>
      </Container>

      <div className="border-b border-white"></div>
      <div className="flex justify-center p-5 font-normal">
        <p>© 2024 All Rights Reserved by RePOS.</p>
      </div>
    </div>
  );
};

export default Footer;
