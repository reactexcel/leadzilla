import React from "react";

const softwareCard = ({
  companyName,
  companyDescription,
  thirdpartyReviewCount,
}) => {
  return (
    <div className="bg-gray-100 flex flex-col items-center h-60 w-90 py-5 px-5 rounded-lg shadow-md border-solid border-2 border-gray-200">
      <h1>{companyName}</h1>
      <h1>{companyDescription}</h1>
      <h1>{thirdpartyReviewCount}</h1>
    </div>
  );
};

export default softwareCard;
