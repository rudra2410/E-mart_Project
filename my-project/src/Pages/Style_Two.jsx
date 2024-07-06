import React from "react";
import Container from "react-bootstrap/esm/Container";
import heart from "../assets/heart.svg";
import Eyes from "../assets/Eyes.svg";
import Cart from "../assets/Cart.svg";
import img from "../assets/moduler-bathtub.webp";
import img1 from "../assets/moduler-toilate.webp";
import img2 from "../assets/modern-kitchen-basin.webp";
import img3 from "../assets/moduler-hand-shower.webp";
import img4 from "../assets/modern-bathtub.webp";
import img5 from "../assets/moduler-basin.webp";

const Style_Four = () => {
  return (
    <div>
      <div className="bg-[#fcf7ef] ">
        <div className="p-4">
          <Container>
            <h1 className="text-[29px] max-md:text-[25px]">
              Product Style One
            </h1>
          </Container>
        </div>
      </div>
      <section className="max-md:block max-md:w-[100%] max-md:p-0 my-[80px] container">
        <div className="flex flex-wrap justify-center items-center m-auto col-xs-block relative space-x-5">
          <div className="col-6 col-md-3 relative p-2 hover:shadow-3xl">
            <div className="absolute right-5  top-5 z-1 max-md:hidden">
              <span className="text-white bg-black px-2 ">-25%</span>
            </div>
            <div className="relative primary-img">
              <div className="overflow-hidden relative">
                <img
                  decoding="async"
                  loading="lazy"
                  alt="custom-image"
                  src={img}
                />
              </div>
              <div className=" absolute bottom-0  z-1 w-[100%] h-[100%] shop-icon">
                <div className="flex justify-center absolute bottom-[10px] w-[100%]">
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="" className="">
                      <img src={heart} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="">
                      <img src={Eyes} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] flex justify-center bg-white m-1  rounded-full icon-1">
                    <a href="">
                      <img src={Cart} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]">
                <h5 className="text-[20px] font-medium max-lg:text-[17px]">
                  Moduler Bathtub
                </h5>
                <p className="text-muted ">
                  <del className="pr-[15px]">$100 </del>
                  <span>$86</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 relative p-2 hover:shadow-3xl">
            <div className="absolute right-5  top-5 z-1 max-md:hidden">
              <span className="text-white bg-black px-2 ">-50%</span>
            </div>
            <div className="relative primary-img">
              <div className="overflow-hidden relative">
                <img
                  decoding="async"
                  loading="lazy"
                  alt="custom-image"
                  src={img1}
                />
              </div>
              <div className=" absolute bottom-0  z-1 w-[100%] h-[100%] shop-icon">
                <div className="flex justify-center absolute bottom-[10px] w-[100%]">
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="" className="">
                      <img src={heart} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="">
                      <img src={Eyes} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] flex justify-center bg-white m-1  rounded-full icon-1">
                    <a href="">
                      <img src={Cart} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]">
                <h5 className="text-[20px] font-medium max-lg:text-[17px]">
                  Moduler Toilate
                </h5>
                <p className="text-muted ">
                  <del className="pr-[15px]">$100 </del>
                  <span>$200</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 relative p-2 hover:shadow-3xl">
            <div className="absolute right-5  top-5 z-1 max-md:hidden">
              <span className="text-white bg-black px-2 ">-40%</span>
            </div>
            <div className="relative primary-img">
              <div className="overflow-hidden relative">
                <img
                  decoding="async"
                  loading="lazy"
                  alt="custom-image"
                  src={img2}
                />
              </div>
              <div className=" absolute bottom-0  z-1 w-[100%] h-[100%] shop-icon">
                <div className="flex justify-center absolute bottom-[10px] w-[100%]">
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="" className="">
                      <img src={heart} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="">
                      <img src={Eyes} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] flex justify-center bg-white m-1  rounded-full icon-1">
                    <a href="">
                      <img src={Cart} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]">
                <h5 className="text-[20px] font-medium max-lg:text-[17px]">
                  Modern Kitchen Basin
                </h5>
                <p className="text-muted ">
                  <del className="pr-[15px]">$200</del>
                  <span>$150</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-md:block max-md:w-[100%] max-md:p-0 my-[80px] container ">
        <div className="flex flex-wrap justify-center items-center m-auto col-xs-block relative space-x-5">
          <div className="col-6 col-md-3 relative p-2 hover:shadow-3xl">
            <div className="absolute right-5  top-5 z-1 max-md:hidden">
              <span className="text-white bg-black px-2 ">-80%</span>
            </div>
            <div className="relative primary-img">
              <div className="overflow-hidden relative">
                <img
                  decoding="async"
                  loading="lazy"
                  alt="custom-image"
                  src={img3}
                />
              </div>
              <div className=" absolute bottom-0  z-1 w-[100%] h-[100%] shop-icon">
                <div className="flex justify-center absolute bottom-[10px] w-[100%]">
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="" className="">
                      <img src={heart} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="">
                      <img src={Eyes} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] flex justify-center bg-white m-1  rounded-full icon-1">
                    <a href="">
                      <img src={Cart} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]">
                <h5 className="text-[20px] font-medium max-lg:text-[17px]">
                  Moduler Hand Shower
                </h5>
                <p className="flex justify-center leading-[50px]">
                  <span>$50.00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 relative p-2 hover:shadow-3xl">
            <div className="absolute right-5  top-5 z-1 max-md:hidden">
              <span className="text-white bg-black px-2 ">-30%</span>
            </div>
            <div className="relative primary-img">
              <div className="overflow-hidden relative">
                <img
                  decoding="async"
                  loading="lazy"
                  alt="custom-image"
                  src={img4}
                />
              </div>
              <div className=" absolute bottom-0  z-1 w-[100%] h-[100%] shop-icon">
                <div className="flex justify-center absolute bottom-[10px] w-[100%]">
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="" className="">
                      <img src={heart} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="">
                      <img src={Eyes} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] flex justify-center bg-white m-1  rounded-full icon-1">
                    <a href="">
                      <img src={Cart} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]">
                <h5 className="text-[20px] font-medium max-lg:text-[17px]">
                  Modern Bathtub
                </h5>
                <p className="flex justify-center leading-[50px]">
                  <span>$300.00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 relative p-2 hover:shadow-3xl">
            <div className="absolute right-5  top-5 z-1 max-md:hidden">
              <span className="text-white bg-black px-2 ">-50%</span>
            </div>
            <div className="relative primary-img">
              <div className="overflow-hidden relative">
                <img
                  decoding="async"
                  loading="lazy"
                  alt="custom-image"
                  src={img5}
                />
              </div>
              <div className=" absolute bottom-0  z-1 w-[100%] h-[100%] shop-icon">
                <div className="flex justify-center absolute bottom-[10px] w-[100%]">
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="" className="">
                      <img src={heart} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] bg-white rounded-full m-1 flex justify-center icon-1">
                    <a href="">
                      <img src={Eyes} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className="p-[12px] flex justify-center bg-white m-1  rounded-full icon-1">
                    <a href="">
                      <img src={Cart} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]">
                <h5 className="text-[20px] font-medium max-lg:text-[17px]">
                  Moduler Basin
                </h5>
                <p className="text-muted ">
                  <del className="pr-[15px]">$150 </del>
                  <span>$100</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Style_Four;
