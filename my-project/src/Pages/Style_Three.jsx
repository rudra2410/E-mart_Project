import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";

function Style_Three() {
  const [data, setData] = useState([]);

  console.log(data);

  const products = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setData(res.data);
    console.log(res.data.products);
  };

  useEffect(() => {
    products();
  }, []);

  return (
    <div>
      <div>
        <h1 className="sm:text-5xl vsm:4xl text-2xl font-semibold tracking-wide text-gray-800 mt-10 ml-4">
          Best selling items
        </h1>
      </div>
      <Container>
        <div className="mt-10 grid lg:grid-cols-4 grid-cols-2 slg:grid-cols-3 justify-center ">
          {data.map((products) => (
            <div key={products.id}>
              <div className="box group w-32 vsm:w-40 lmd:w-52 relative mx-auto md:mx-7 my-4">
                <div className="relative">
                  <img
                    src={products.img1}
                    className="md:max-w-72 duration-100 ease-in-out hovertransition-all  hover:scale-100"
                    alt="Imagem de perfil"
                  />
                  <img
                    src={products.img2}
                    className="md:max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100"
                    alt="Nova imagem"
                  />
                  <div className="flex opacity-0 group-hover:opacity-100 duration-500  absolute left-2 vsm:left-5 lmd:left-8 md:left-20 top-[110px] vsm:top-[150px] lmd:top-[200px] md:top-80">
                    <CiHeart className="size-7 lmd:size-9 mx-1 border-2 rounded-full p-1 bg-white hover:bg-black hover:text-white mt-3" />
                    <FaRegEye className="size-7 mx-1 lmd:size-9 border-2 rounded-full p-1 bg-white hover:bg-black hover:text-white mt-3" />
                    <LuShoppingBag className="size-7 lmd:size-9 mx-1 border-2 rounded-full bg-white p-1 hover:bg-black hover:text-white mt-3" />
                  </div>
                </div>

                <div className="mt-3">
                  <h1 className="md:text-2xl font-medium text-gray-800  ">
                    {products.name}
                  </h1>
                  <h3 className="vsm:text-md text-gray-800 mt-2">
                    {products.Showprice}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </Container>
    </div>
  );
}

export default Style_Three;
