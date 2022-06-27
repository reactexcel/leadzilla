import React from "react";
import Image from "next/image";

const LowerMiddlesection = () => {
    return ( 
        <div className="w-10/12 py-2 px-8 m-auto text-center pt-20">
<div className="text-3xl font-light ">
    <div className="font-black">Leadzilla works across industries </div>
    <div>and business types</div>
</div>
<div className="flex justify-evenly mt-16">
    <div>
        <Image src="/assets/whitecard.png" alt="" width="486px" height="542px"/>
    </div>
    <div className="my-auto">
    <Image src="/assets/line.png" alt="" width="223px" height="2px"/>
    </div>
    <div>
    <Image src="/assets/bluecard.png" alt="" width="486px" height="542px"/>
    </div>
</div>
        </div>
    )
}
export default LowerMiddlesection