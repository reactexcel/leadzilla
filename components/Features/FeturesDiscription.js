import Image from "next/image"

const FeaturesDiscription = () => {
    return(
      
<div className="bg-yellow-bg">
<div className="w-10/12 py-2 px-8 m-auto">
  <div className="pt-20">
    <div className="flex">
      <p className=""> I’m sure you have searched online for </p>
      <h2 className="font-medium">
        “how to find phone numbers from LinkedIn”{" "}
      </h2>
    </div>
    <div className="flex">
      <p className="">tried tools that gave you junk data. </p>
      <h2 className="font-medium">
        Or maybe you tried to find email addresses of a{" "}
      </h2>
    </div>
    <div className="flex">
      <h2 className="font-medium">
        business owner from their website and only got the
      </h2>
      <p className="text-blue-500 font-medium pr-2">
        {" "}
        contact@example.com{" "}
      </p>{" "}
      address or
    </div>
    <p className="flex">
      <p className="text-blue-500 font-medium pr-2">info@example.com</p>
      <p> address, which no one really checks for email.</p>
      <h2 className="font-medium"> Or maybe you have a</h2>
    </p>
    <p className="font-medium">
      {" "}
      contact data platform in place but can’t seem to get any qualified
      leads.
    </p>
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
      <p className="flex">
        <p> That’s where</p>
        <p className="text-blue-500">
          {" "}
          Leadzilla steps in and gives you
        </p>
      </p>
      <p className="text-blue-500">
        {" "}
        the accurate,verified email addresses and{" "}
      </p>
      <p className="flex">
        <p className="text-blue-500">
          {" "}
          phone numbers of the potential customers{" "}
        </p>{" "}
        <p>you</p>
      </p>
      <p> desperately want to get in touch with.</p>
      <p className="pt-8 pb-28">
        <p className="flex">
          <p> And that’s not all,</p>{" "}
          <p className="text-blue-500"> it uses industry-leading AI</p>
        </p>
        <p className="text-blue-500">
          {" "}
          to write personalized emails to them.
        </p>
      </p>
    </div>
  </div>
</div>
</div>  
    )
}
export default FeaturesDiscription