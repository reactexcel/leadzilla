import Image from "next/image";

function CarouselContent({
  customerImage,
  customerName,
  customerCompany,
  customerReview,
}) {
  return (
    <div className="flex flex-row pb-10">
      <div>
        <Image
          src="/assets/doubleQuotes.svg"
          width="180"
          height="160"
          alt="image"
        />
      </div>
      <div className="flex flex-row items-center pt-10">
        <div className="ml-3">
          <Image
            src={customerImage}
            width="650"
            height="650"
            alt="profile picture"
          />
        </div>
        <div className="pl-2 mx-10">
          <p className="text-black text-2xl">{customerReview}</p>
          <p className="font-semibold text-2xl text-black">{customerName}</p>
          <p className="text-sm text-gray-500">{customerCompany}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselContent;
