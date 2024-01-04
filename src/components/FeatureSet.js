import React, { useState } from "react";
import { FEATURE_SET } from "../constants";

const FeatureSet = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className="bg-sky-100 py-12.5">
      <div className="max-w-7xl  w-full mx-auto text-center">
        <h1 className="text-[35px] leading-[1.4em] text-dark-300 font-medium pb-10">
          Explore our awesome <strong> Feature Set</strong>
        </h1>
        <div className="flex justify-center">
          <img
            src="https://re-pos.in/wp-content/uploads/2019/11/title_divider-1.png"
            alt="lines"
          />
        </div>
        <div className="flex justify-center mt-14 pb-10">
          <div className="grid grid-cols-4 cardCon gap-14">
            {FEATURE_SET.map((item, index) => {
              const isHovered = hoveredCard === item.id;

              return (
                <div
                  key={item.id}
                  className={`col-span-1  flex flex-col items-center shadow-card  h-[450px] p-30 text-center   rounded-[10px] ${
                    isHovered ? "buttonPrimary" : "bg-white"
                  }`}
                  onMouseEnter={() => handleCardHover(item.id)}
                  onMouseLeave={handleCardLeave}
                >
                  <img
                    className="object-cover  w-[70px]"
                    alt="home"
                    src={item.url}
                  />
                  <div className="pb-3.75 mb-5"></div>
                  <div className="mt-3">
                    <h2 className="text-lg leading-[1.4rem] pb-10 text-gray-800">
                      {item.title}
                    </h2>
                    <p className="pb-4 text-[15px] mb-5 font-normal text-gray-600">
                      {item.desc}
                    </p>
                  </div>

                  <button className="bg-dark-100 text-[15px] py-3.75 px-30 rounded-xl text-white hover:bg-transparent hover:border hover:border-dark-100 hover:text-dark-100">
                    Know More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSet;
