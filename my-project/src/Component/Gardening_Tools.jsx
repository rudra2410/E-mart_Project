import React from "react";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";

const Gardening_Tools = () => {
  return (
    <div className="relative mb-[50px]">
      <div className="bg-[url('https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/full-bg-img-scaled.webp')] relative bg-cover h-[430px] bg-repeat-x bg-start ">
        <div className="max-lg:absolute max-lg:opacity-50 max-lg:h-[100%] w-[100%] max-lg:bg-black "></div>
        <Container className="flex items-start gardening">
          <div className="ms-auto max-w-[650px] max-md:right-auto flex items-center gardening">
            <div>
              <div className="max-md:block">
                <h1 className="text-[40px] mb-[20px] text-white max-md:text-[30px] max-md:flex justify-center items-center ">
                  <div className="flex text-wrap">
                    <h1>Find your perfect gardening <br /> tools on best price</h1>
                  </div>
                </h1>
                <div className="mt-5 mb-3 max-md:flex justify-center">
                  <a
                    href=""
                    className="inline-block py-[12px] px-[40px] font-semibold hover:-translate-y-[10px] duration-300 ease-in-out bg-white shop-now rounded"
                  >
                    <NavLink to={"./Shop_Now"}>Shop Now</NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Gardening_Tools;
