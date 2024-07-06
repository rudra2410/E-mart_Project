import React from "react";
import Container from "react-bootstrap/esm/Container";
import heart from "../assets/heart.svg";
import Eyes from "../assets/Eyes.svg";
import Cart from "../assets/Cart.svg";

const New_arrivals = () => {
  return (
    <div className="continer flex justify-center py-[50px] max-xl:p-0">
      <Container>
        <div className="flex justify-start">
          <div>
            <h1 className="text-[35px] font-normal max-md:text-[30px]">
              New arrivals
            </h1>
          </div>
        </div>

        <section className="max-md:block max-md:w-[100%] max-md:p-0 my-[30px] ">
          <div className="flex row justify-between max-2xl:flex-wrap m-auto col-xs-block">
            <div className="col-6 col-lg-3 relative ">
              <div className="absolute right-5 top-3  z-1 max-md:hidden">
                <span className="text-white bg-black px-2 ">-40%</span>
              </div>

              <div className="relative primary-img">
                <div className="overflow-hidden relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-Nest-Leslie-Fern.webp"
                  />
                </div>
                <div className="absolute left-0 top-0 z-1 shop-icon">
                  <div className="p-4">
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="" className="">
                        <img src={heart} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="">
                        <img src={Eyes} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] flex justify-center bg-white m-2  rounded-full icon-1">
                      <a href="">
                        <img src={Cart} alt="" height={8} width={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
                <h5>Bird's nest leslie</h5>
                <p className="text-muted ">
                  <del className="pr-[8px]">$45</del>
                  <span>$30</span>
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 relative ">
              <div className="absolute right-5  top-3 z-1 max-md:hidden">
                <span className="text-white bg-black px-2">-22%</span>
              </div>

              <div className="relative primary-img">
                <div className="overflow-hidden relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp"
                  />
                </div>
                <div className="absolute left-0 top-0 z-1 shop-icon">
                  <div className="p-4">
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="" className="">
                        <img src={heart} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="">
                        <img src={Eyes} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] flex justify-center bg-white m-2  rounded-full icon-1">
                      <a href="">
                        <img src={Cart} alt="" height={8} width={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
                <h5>Monstera plant</h5>
                <p className="text-muted ">
                  <del className="pr-[8px]">$60</del>
                  <span>$48</span>
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 relative ">
              <div className="absolute right-5  top-3 z-1 max-md:hidden">
                <span className="text-white bg-black px-2 ">-10%</span>
              </div>

              <div className="relative primary-img">
                <div className="overflow-hidden relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp"
                  />
                </div>
                <div className="absolute left-0 top-0 z-1 shop-icon">
                  <div className="p-4">
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="" className="">
                        <img src={heart} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="">
                        <img src={Eyes} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] flex justify-center bg-white m-2  rounded-full icon-1">
                      <a href="">
                        <img src={Cart} alt="" height={8} width={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
                <h5>Haworthia</h5>
                <p className="text-muted ">
                  <del className="pr-[8px]">$87</del>
                  <span>$70</span>
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3 relative  ">
              <div className="absolute right-5  top-3 z-1 max-md:hidden">
                <span className="text-white bg-black px-2 ">-20%</span>
              </div>
              <div className="relative primary-img">
                <div className="overflow-hidden relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp"
                  />
                </div>
                <div className="absolute left-0 top-0 z-1 shop-icon">
                  <div className="p-4">
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="" className="">
                        <img src={heart} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                      <a href="">
                        <img src={Eyes} alt="" height={16} width={16} />
                      </a>
                    </div>
                    <div className="p-[12px] flex justify-center bg-white m-2  rounded-full icon-1">
                      <a href="">
                        <img src={Cart} alt="" height={8} width={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
                <h5>Monstera plant</h5>
                <p className="text-muted ">
                  <span>$60.00</span>
                </p>
              </div>
            </div>

            <div className="max-lg:justify-start max-lg:flex">
              <div className="col-6 col-lg-3 relative pr-[20px] max-sm:pr-[10px]">
                <div className="absolute right-8  top-3 z-1 max-md:hidden">
                  <span className="text-white bg-black px-2 ">-50%</span>
                </div>

                <div className="relative primary-img">
                  <div className="overflow-hidden relative">
                    <img
                      decoding="async"
                      loading="lazy"
                      alt="custom-image"
                      src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp"
                    />
                  </div>
                  <div className="absolute left-0 top-0 z-1 shop-icon">
                    <div className="p-4">
                      <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                        <a href="" className="">
                          <img src={heart} alt="" height={16} width={16} />
                        </a>
                      </div>
                      <div className="p-[12px] bg-white rounded-full m-2 flex justify-center icon-1">
                        <a href="">
                          <img src={Eyes} alt="" height={16} width={16} />
                        </a>
                      </div>
                      <div className="p-[12px] flex justify-center bg-white m-2  rounded-full icon-1">
                        <a href="">
                          <img src={Cart} alt="" height={8} width={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
                  <h5>Bird's nest fera</h5>
                  <p className="text-muted ">
                    <del className="pr-[8px]">$68</del>
                    <span>$54</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default New_arrivals;
