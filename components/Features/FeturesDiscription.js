import Image from "next/image"

const FeaturesDiscription = () => {
    return(
      
<div className="bg-yellow-bg pb-20">
<div className="w-10/12 py-2 px-4 m-auto">
  <div className="pt-20">
    <div>
      <span> I’m sure you have searched online for </span>
      <span className="font-medium">
        “how to find phone numbers from LinkedIn”{" "}
      </span>
    <div>
      <span>tried tools that gave you junk data. </span>
      <span className="font-medium">Or maybe you tried to find email addresses of a{" "}</span>
    </div>
    <div>
      <span className="font-medium">
        business owner from their website and only got the
      </span>
      <span className="text-blue-500 font-medium pr-2">contact@example.com</span>address or
    </div>
    <div>
      <span className="text-blue-500 font-medium pr-2">info@example.com</span>
      <span> address, which no one really checks for email.</span>
      <span className="font-medium"> Or maybe you have a</span>
    </div>
    </div>
    <span className="font-medium">
      {" "}
      contact data platform in place but can’t seem to get any qualified
      leads.
    </span>
  </div>
  <div className="flex pl-28">
    <div className="pt-2">
      <Image
        src="/assets/Arrow 14.png"
        alt=""
        width="100px"
        height="200px"
      />
    </div>
    <div className="font-black text-2xl pl-10 pt-20">
        <span> That’s where</span>
        <span className="text-blue-500">
          {" "}
          Leadzilla steps in and gives you
        </span>
      <div className="text-blue-500">
        {" "}
        the accurate,verified email addresses and{" "}
      </div>
      <div>
        <span className="text-blue-500">
          {" "}
          phone numbers of the potential customers{" "}
        </span>{" "}you
      </div>
      <span> desperately want to get in touch with.</span>
      <div className="pt-8 pb-28">
        And that’s not all,{" "}
        <span className="text-blue-500"> it uses industry-leading AI</span>
        <div className="text-blue-500">
          to write personalized emails to them.
        </div>
      </div>
    </div>
  </div>
    <div className="-mt-20 text-center ml-96">
    <Image src="/assets/Arrow 5.png" alt="" width = "90px" height="100px"/>
    </div>
</div>
</div>  
    )
}
export default FeaturesDiscription