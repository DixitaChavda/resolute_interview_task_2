import React, { useState } from "react";
const FEATURE_SET = [
  {
    id: 1,
    title: "Point Of Sale",
    desc: "Introducing a combination of unparalleled characteristics for managing your restaurant",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_01.png",
  },
  {
    id: 2,
    title: "Stock Management",
    desc: "Helps you efficiently manage stock, unused items, reduce wastage and record new stock",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_02.png",
  },
  {
    id: 3,
    title: "Sales & Marketing",
    desc: "Enables you to drive result oriented sales and marketing campaigns for your restaurant",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_01.png",
  },
  {
    id: 4,
    title: "Customer Relationship Tool",
    desc: "Helps you analyse customer behavior and enables you to stay in touch with your customers",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_02.png",
  },
  {
    id: 5,
    title: "  Franchise Management",
    desc: "An exclusive feature for multichain restaurants or businesses operating on the franchisee model",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_02.png",
  },
  {
    id: 6,
    title: "Head Office Module",
    desc: "Central management of overall functioning of menus, recipes, inventory, user roles & permissions",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_02.png",
  },
  {
    id: 7,
    title: "Reporting & Analytics",
    desc: "Get powerful insights about your restaurant on-the-go and use it to improvise your business",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_02.png",
  },
  {
    id: 8,
    title: "Settings & Configuration",
    desc: "Assists you in operating your business effectively with options that best suit your processes",
    url: "https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_02.png",
  },
];

const FeatureSet = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (id) => {
      setHoveredCard(id);
    };
  
    const handleCardLeave = () => {
      setHoveredCard(null);
    };
  return (
    <div className="bg-sky-100">
    <div className="max-w-7xl w-full mx-auto text-center">
      <h1 className="text-[35px] leading-[1.4em] text-dark-300 font-medium pb-[10px]">
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
                className={`col-span-1  flex flex-col items-center shadow-card  h-[450px] p-[30px] text-center   rounded-[10px] ${
                  isHovered ? "buttonPrimary" : "bg-white"
                }`}
                onMouseEnter={() => handleCardHover(item.id)}
                onMouseLeave={handleCardLeave}
              >
                <img className="object-cover w-[70px]" alt="home" src={item.url} />
                <div className="flex-1 mt-3">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>

                <button className="bg-dark-100 py-4 px-7 rounded-xl text-white hover:bg-transparent hover:border hover:border-dark-100 hover:text-dark-100">
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
