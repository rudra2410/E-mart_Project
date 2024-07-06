import React from "react";
import img1 from "../assets/store-img-1.jpg";
import img2 from "../assets/store-img-2.jpg";
import img3 from "../assets/store-img-3.jpg";

const ContactUs = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="vsm:order-2">
          <h1 className="pt-20 ml-14 text-[40px] text-black font-semibold">
            Reach Out To Us
          </h1>
          <h4 className="ml-14 mt-5 text-[22px] capitalize">By Address</h4>
          <p className="text-[#666666] text-[16px] p-4 ml-8">
            Please reach us: 121 King St, Melbourne VIC 3000, Australia
          </p>
          <h4 className="ml-14 mt-2 text-[22px] capitalize">By email</h4>
          <p className="text-[#666666] text-[16px] p-4 ml-8">
            Please email us and we’ll get back to you within 24 hours:
            info@example.com
          </p>
          <h4 className="ml-14 mt-2 text-[22px] capitalize">By phone</h4>
          <p className="text-[#666666] text-[16px] p-4 ml-8">
            Call our store: 888 123 4567
          </p>
        </div>
        {/* <div className="relative">
              <h1 className="border-t-2 border-black rotate-90 absolute -right-20"></h1>
            </div> */}

        <div className="mb-20 vsm:order-2" >
          <h1 className="text-[40px] font-medium text-black mt-20">
            Send Your Request
          </h1>
          <input
            type="text"
            placeholder="Name"
            className=" font-semibold mt-10 w-[550px] border border-[#666666] text-[20px] px-3 py-2 focus:outline-none placeholder:text-[#000] placeholder:font-medium"
          />
          <input
            type="text"
            placeholder="Email Address"
            className=" font-semibold mt-4 w-[550px] border border-[#666666] text-[20px] px-3 py-2 focus:outline-none placeholder:text-[#000] placeholder:font-medium"
          />
          <input
            type="text"
            placeholder="Phone"
            className="font-semibold mt-4 w-[550px] border border-[#666666] text-[20px] px-3 py-2 focus:outline-none placeholder:text-[#000] placeholder:font-medium"
          />
          <br />
          <textarea
            placeholder="Massage"
            rs={5}
            cols={66}
            className="font-semibold mt-4 w-[550px] border border-[#666666] text-[20px] px-3 py-2 focus:outline-none placeholder:text-[#000] placeholder:font-medium"
          ></textarea>
          <br />
          <button className="w-[550px] h-[45px] rounded-md text-white mt-3 bg-[#000]">
            Send Massage
          </button>
        </div>
      </div>
      <div className="mb-20">
        <h1 className="border-b border-black"></h1>
      </div>

      <div>
        <h1 className="text-black font-semibold text-center mt-10 mb-4 text-[40px]">
          Our Stores
        </h1>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 ml-10">
            <div className="rounded-lg overflow-hidden">
              <img
                src={img1}
                alt="Thrift"
                className="w-[400px] h-[433px] ml-4"
              />
              <div className="p-4">
                <h2 className="text-[14px] font-bold mb-2 text-[#e1a58c]">
                  NEWYORK
                </h2>
                <p className="text-black font-semibold mt-3 text-[20px]">
                  Thrift
                </p>
                <p className="text-[16px] text-[#666666] leading-6 mt-2 capitalize">
                  There are many variations of passages of Lorem available
                  denounce
                </p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden">
              <img
                src={img2}
                alt="Shophouse"
                className="w-[400px] h-[433px] ml-4"
              />
              <div className="p-4">
                <h2 className="text-[14px] font-bold mb-2 text-[#e1a58c]">
                  WASHINGTON
                </h2>
                <p className="text-black font-semibold mt-3 text-[20px]">
                  Shophouse
                </p>
                <p className="text-[16px] text-[#666666] leading-6 mt-2 capitalize ">
                  On the other hand, we denounce with righteous indignation
                </p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden">
              <img
                src={img3}
                alt="Leisurewear"
                className="w-[400px] h-[433px] ml-4"
              />
              <div className="p-4">
                <h2 className="text-[14px] font-bold mb-2 text-[#e1a58c]">
                  LAS VEGAS
                </h2>
                <p className="text-black font-semibold mt-3 text-[20px]">
                  Leisurewear
                </p>
                <p className="text-[16px] text-[#666666] leading-6 mt-2 capitalize">
                  Righteous indignation and dislike we denounce with righteous
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
