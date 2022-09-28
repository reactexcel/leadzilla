import React from "react";

const SoftwareCard = ({
  companyName,
  companyDescription,
  thirdpartyReviewCount,
}) => {
  return (
    <div className="bg-gray-100 flex flex-col items-center h-60 w-90 py-5 px-5 border-solid border-2 border-black">
      <h1>{companyName}</h1>
      <h1>{companyDescription}</h1>
      <h1>{thirdpartyReviewCount}</h1>
    </div>
  );
};

export default SoftwareCard;
