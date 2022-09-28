import React from "react";
import Header from "../header";

const HeadFaq = () => {
  return (
    <div className="bg-green-100">
      <Header />
      <div className="text-6xl text-center font-extrabold font-gilroybold py-14">
        Compare B2B Sales Software
      </div>

      <div className="flex flex-col items-center">
        <div className="text-2xl p-6 md:text-lg text-center py-8 w-9/12">
          Here's our comprehensive list of B2B sales software. Initially
          collected as part of our competitive analysis, we decided to publish
          our verdicts, along with their ratings - so you don't have to!
        </div>
      </div>
    </div>
  );
};

export default HeadFaq;
