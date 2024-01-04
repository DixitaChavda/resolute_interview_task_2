import React from "react";
import Container from "../layouts/Container";

const Repos = () => {
  return (
    <div className=" ">
      <Container>
        <div className="flex my-[30px]">
          <div className="w-[47%] mr-[5.5%] py-[30px]">
            <div className="flex  flex-col">
              <div className="flex justify-between py-[5%]">
                <div className="p-[50px] w-[44%]  rounded-lg text-center shadow-box buttonPrimary bg-buttonPrimary">
                  <h1 className="leading-[1.4em] font-medium text-[42px] text-white pb-[10px]">
                    7+
                  </h1>
                  <h2 className="text-lg font-normal pb-0 text-white">
                    Countries
                  </h2>
                </div>
                <div className="p-[50px] w-[44%]   rounded-lg text-center shadow-box buttonPrimary bg-buttonPrimary">
                  <h1 className="leading-[1.4em] font-medium text-[42px] text-white pb-[10px]">
                    7+
                  </h1>
                  <h2 className="text-lg font-normal pb-0 text-white">
                    Countries
                  </h2>
                </div>
              </div>
              <div className="flex  justify-between  py-[5%]">
                <div className="p-[50px] w-[44%]  rounded-lg text-center shadow-box buttonPrimary bg-buttonPrimary">
                  <h1 className="leading-[1.4em] font-medium text-[42px] text-white pb-[10px]">
                    7+
                  </h1>
                  <h2 className="text-lg font-normal pb-0 text-white">
                    Countries
                  </h2>
                </div>
                <div className="p-[50px] w-[44%] rounded-lg text-center shadow-box buttonPrimary bg-buttonPrimary">
                  <h1 className="leading-[1.4em] font-medium text-[42px] text-white pb-[10px]">
                    7+
                  </h1>
                  <h2 className="text-lg font-normal pb-0 text-white">
                    Countries
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[47%] ">
            <div className="mb-[5%]">
              <h1 className="text-[35px] text-left leading-[1.4em] pb-[10px]">
                What is <strong>RePOS</strong>?
              </h1>
              <img
                className="max-w-[100%] h-auto mb-[30px]"
                src="https://re-pos.in/wp-content/uploads/2019/11/title_divider-1.png"
                alt="lines"
              />
              <p className="font-normal pb-4">
                RePOS is much more than just any other POS Software. It has been
                conceived, designed and brought to reality by a team of software
                experts. It serves all the requirements a restaurant has in
                order to achieve its goal of customer satisfaction.{" "}
              </p>
              <p className="font-normal ">
                RePOS is a Full-featured POS software application that can
                handle counter sales, inventory tracking, customer data
                management, mobile connectivity, and robust integrations. It is
                a solution for Casual / Fine Dine Restaurants, Quick Serve
                Restaurants, Bakery, Cake Shops, Cafe / Coffee Shops, Ice Cream
                / Juice Centers, Food Chains, Pizza Chains, Delivery Kitchen,
                Food Trucks and soon!
              </p>
            </div>      

            <button className="bg-dark-100 py-4 px-7 rounded-xl text-white hover:bg-transparent hover:border hover:border-dark-100 hover:text-dark-100">
              Know More
            </button>
          </div>
        </div>
      </Container>
      <div className="wave"></div>
    </div>
  );
};

export default Repos;
