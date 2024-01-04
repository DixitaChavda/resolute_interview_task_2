import React from "react";
import Container from "../layouts/Container";

const SoftwareSolution = () => {
  return (
    <div className="bg-repos pb-[325px] bg-bottom-center bg-contain bg-no-repeat pt-0">
      <Container>
        <div className="flex flex-col justify-center items-center py-7">
          <div className="mb-7">
            <h2 className="text-3xl text-center pb-0 leading-[1.4em]">
              Simple, Powerful & Affordable
            </h2>
            <h1 className="text-dark-100 text-5xl text-center font-black pb-0 leading-[1.4em] uppercase">
              POS SOFTWARE SOLUTION
            </h1>
            <h2 className="text-3xl text-center pb-0 leading-[1.4em] font-medium text-dark-300">
              For All Restaurant Types
            </h2>
          </div>
          <button className="bg-dark-100 py-4 px-7 rounded-xl text-white">
            Book A Demo
          </button>
        </div>
      </Container>
    </div>
  );
};

export default SoftwareSolution;
