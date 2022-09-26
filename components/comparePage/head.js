import React from "react";
import Header from "../header";

const HeadFaq = ({ firstCompany, secondCompany }) => {
  return (
    <div className="bg-green-100">
      <Header />
      <div className="text-6xl text-center font-extrabold font-gilroybold py-14">
        {firstCompany} vs {secondCompany}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-medium font-gilroybold py-5 w-9/12">
          Both tools are great, but which one is right for you? Let's break it
          down...
        </div>
      </div>
    </div>
  );
};

export default HeadFaq;
