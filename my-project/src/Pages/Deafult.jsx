import React from "react";
import img2 from "../assets/elegant-garment-collection-hanging-modern-boutique-generated-by-ai.jpg";
import img4 from "../assets/blog-image-one.webp";
import img5 from "../assets/blog-image-three.webp";
import img6 from "../assets/blog-image-four.webp";
import img7 from "../assets/blog-image-five.webp";
import img8 from "../assets/blog-image-six.webp";
import img9 from "../assets/blog-image-seven.webp";
import { FaArrowRight } from "react-icons/fa6";
import img10 from "../assets/blog-img-12-1.webp";

const Deafult = () => {
  return (
    <div>
      <div className="mt-20 mb-20">
        <div className="grid grid-cols-3 pl-10">
          <div class="main-overlay">
            <img src={img10} className="w-fit" />
            <div class="overlay"></div>
            <div className="absolute top-20 text-center space-x-6">
              <p className="text-white font-semibold space-x-4 uppercase">
                PhotoGraphy
                <span className="ml-2">ADMIN</span>
                <span>OCTOBER 18 ,2020</span>
              </p>
              <h1 className="mt-4 tracking-wide text-center text-white font-semibold text-[20px] leading-7">
                Transition Your favorite Looks <br /> Into Fall France
              </h1>
              <div className="flex text-[#fff] justify-center space-x-3 items-center pt-2">
                <button>
                  <a href="">Read More</a>
                </button>
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div class="main-overlay">
            <img src={img2} className="w-fit" />
            <div class="overlay"></div>
            <div className="absolute top-20 text-center space-x-6">
              <p className="text-white font-semibold space-x-4 uppercase">
                SHOPPING
                <span className="ml-4">ADMIN</span>
                <span>OCTOBER 18 ,2020</span>
              </p>
              <h1 className="mt-4 tracking-wide text-center text-white font-semibold text-[20px] leading-7">
                Perfect Quality Reasonable Price <br /> For Your Family
              </h1>
              <div className="flex text-[#fff] justify-center space-x-3 items-center pt-2">
                <button>
                  <a href="">Read More</a>
                </button>
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div class="main-overlay">
            <img src={img10} className="w-fit" />
            <div class="overlay"></div>
            <div className="absolute top-20 text-center space-x-6">
              <p className="text-white font-semibold space-x-4 uppercase">
                BLOG
                <span className="ml-4">ADMIN</span>
                <span>OCTOBER 18 ,2020</span>
              </p>
              <h1 className="mt-4 tracking-wide text-center text-white font-semibold text-[20px] leading-7">
                Popular Reasons You Must Drinks <br /> Juice Everyday
              </h1>
              <div className="flex text-[#fff] justify-center space-x-3 items-center pt-2">
                <button>
                  <a href="">Read More</a>
                </button>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="flex justify-center items-center space-x-5 flex-wrap pb-20">
        <div className="mb-40">
          <div className="w-[400px] h-[250px] overflow-hidden">
            <img
              src={img4}
              className="w-[400px] h-[250px] hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="flex items-center leading-[40px]">
            <h2 className="text-[#30353b] uppercase font-bold text-[12px]">
              Leota Jerez
            </h2>
            <p className="ml-4 text-[#ff3f33] uppercase font-bold text-[12px] ">
              OCTOBER 19, 2022
            </p>
          </div>
          <h1 className="text-[#000a12] font-medium text-[22px] w-[350px] tracking-wide capitalize mt-2 leading-8">
            5 Incredibly Useful Fashion Tips For Small Businesses
          </h1>
          <p className="mt-2 text-[#666666] w-[400px] capitalize leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse
            nemo ad eveniet dolorum...
          </p>
          <div className="flex text-[#000a12] space-x-3 items-center pt-2">
            <button>
              <a href="">Read More</a>
            </button>
            <FaArrowRight />
          </div>
        </div>
        <div className="mb-40">
          <div className="w-[400px] h-[250px] overflow-hidden">
            <img
              src={img5}
              className="w-[400px] h-[250px] hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="flex items-center leading-[40px]">
            <h2 className="text-[#30353b] uppercase font-bold text-[12px]">
              Leota Jerez
            </h2>
            <p className="ml-4 text-[#ff3f33] uppercase font-bold text-[12px] ">
              OCTOBER 19, 2022
            </p>
          </div>
          <h1 className="text-[#000a12] font-medium text-[22px] w-[350px] tracking-wide capitalize mt-2 leading-8">
            How To Find The Right Fashion For Your Specific Product
          </h1>
          <p className="mt-2 text-[#666666] w-[400px] capitalize leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse
            nemo ad eveniet dolorum...
          </p>
          <div className="flex text-[#000a12] space-x-3 items-center pt-2">
            <button>
              <a href="">Read More</a>
            </button>
            <FaArrowRight />
          </div>
        </div>
        <div className="mb-32">
          <div className="w-[400px] h-[250px] overflow-hidden">
            <img
              src={img6}
              className="w-[400px] h-[250px] hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="flex items-center leading-[40px]">
            <h2 className="text-[#30353b] uppercase font-bold text-[12px]">
              Leota Jerez
            </h2>
            <p className="ml-4 text-[#ff3f33] uppercase font-bold text-[12px] ">
              OCTOBER 19, 2022
            </p>
          </div>
          <h1 className="text-[#000a12] font-medium text-[22px] w-[350px] tracking-wide capitalize mt-2 leading-8">
            The Psychology Behind Fashion Trends: What We Wear
          </h1>
          <p className="mt-2 text-[#666666] w-[400px] capitalize leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse
            nemo ad eveniet dolorum...
          </p>
          <div className="flex text-[#000a12] space-x-3 items-center pt-2">
            <button>
              <a href="">Read More</a>
            </button>
            <FaArrowRight />
          </div>
        </div>
        <div className="mb-32">
          <div className="w-[400px] h-[250px] overflow-hidden">
            <img
              src={img7}
              className="w-[400px] h-[250px] hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="flex items-center leading-[40px]">
            <h2 className="text-[#30353b] uppercase font-bold text-[12px]">
              Leota Jerez
            </h2>
            <p className="ml-4 text-[#ff3f33] uppercase font-bold text-[12px] ">
              OCTOBER 19, 2022
            </p>
          </div>
          <h1 className="text-[#000a12] font-medium text-[22px] w-[350px] tracking-wide capitalize mt-2 leading-8">
            The Psychology Behind Fashion Trends: What We Wear
          </h1>
          <p className="mt-2 text-[#666666] w-[400px] capitalize leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse
            nemo ad eveniet dolorum...
          </p>
          <div className="flex text-[#000a12] space-x-3 items-center pt-2">
            <button>
              <a href="">Read More</a>
            </button>
            <FaArrowRight />
          </div>
        </div>
        <div className="-mt-20">
          <div className="w-[400px] h-[250px] overflow-hidden">
            <img
              src={img8}
              className="w-[400px] h-[250px] hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="flex items-center leading-[40px]">
            <h2 className="text-[#30353b] uppercase font-bold text-[12px]">
              Leota Jerez
            </h2>
            <p className="ml-4 text-[#ff3f33] uppercase font-bold text-[12px] ">
              OCTOBER 19, 2022
            </p>
          </div>
          <h1 className="text-[#000a12] font-medium text-[22px] w-[350px] tracking-wide capitalize mt-2 leading-8">
            The Psychology Behind Fashion Trends: What We Wear
          </h1>
          <p className="mt-2 text-[#666666] w-[400px] capitalize leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse
            nemo ad eveniet dolorum...
          </p>
          <div className="flex text-[#000a12] space-x-3 items-center pt-2">
            <button>
              <a href="">Read More</a>
            </button>
            <FaArrowRight />
          </div>
        </div>
        <div className="-mt-20">
          <div className="w-[400px] h-[250px] overflow-hidden">
            <img
              src={img9}
              className="w-[400px] h-[250px] hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="flex items-center leading-[40px]">
            <h2 className="text-[#30353b] uppercase font-bold text-[12px]">
              Leota Jerez
            </h2>
            <p className="ml-4 text-[#ff3f33] uppercase font-bold text-[12px] ">
              OCTOBER 19, 2022
            </p>
          </div>
          <h1 className="text-[#000a12] font-medium text-[22px] w-[350px] tracking-wide capitalize mt-2 leading-8">
            The Psychology Behind Fashion Trends: What We Wear
          </h1>
          <p className="mt-2 text-[#666666] w-[400px] capitalize leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse
            nemo ad eveniet dolorum...
          </p>
          <div className="flex text-[#000a12] space-x-3 items-center pt-2">
            <button>
              <a href="">Read More</a>
            </button>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deafult;
