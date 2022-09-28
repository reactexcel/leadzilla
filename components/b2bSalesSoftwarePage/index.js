import React from "react";
import Head from "./head";
import SoftwareCard from "./softwareCard";
import { b2bSoftwareData } from "../../data/b2bSalesSoftwareData";

const SalesSoftwarePage = () => {
  return (
    <>
      <Head />
      <div className="grid grid-cols-3 gap-4 py-20 px-20">
        {b2bSoftwareData.map((data, index) => {
          return (
            <SoftwareCard
              key={index}
              companyName={data.companyName}
              companyDescription={data.companyDescription}
              thirdpartyReviewCount={data.thirdpartyReviewCount}
            />
          );
        })}
      </div>
    </>
  );
};

export default SalesSoftwarePage;
