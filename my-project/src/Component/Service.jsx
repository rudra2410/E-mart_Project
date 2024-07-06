import React from "react";
import Container from "react-bootstrap/esm/Container";


const Service = () => {
    return (
        <div className="bg-[#e7e2dd]">
            <Container >
                <section className="py-[50px]">
                    <div className="flex row  max-md:block ">
                        <div className="col-xl-3 flex items-center justify-start  col-md-6 max-md:pb-7 max-md:block">
                            <div className="px-4 max-md:pb-[20px] max-md:flex max-md:justify-center">
                                <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Free-shipping-2-10.svg" title="" alt="" loading="lazy" width={30} height={30} className="max-md:w-[45px]  max-sm:w-[30px] hover:-translate-x-[10px] duration-300 ease-in-out" />
                            </div>
                            <div className="max-md:block">
                                <h4 className="font-normal mb-2 text-[18px] max-md:flex max-md:justify-center ">Free shipping</h4>
                                <p className="text-muted max-md:flex max-md:justify-center">On order over $1499</p>
                            </div>
                        </div>

                        <div className="col-xl-3 flex items-center justify-start  col-md-6 max-md:pb-7 max-md:block">
                            <div className="px-4 max-md:pb-[20px] max-md:flex max-md:justify-center">
                                <img decoding="async" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Quick-payment-svg-10.svg" alt="Quick-payment-svg-10" loading="lazy" width={25} height={25} className="max-md:w-[35px] max-sm:w-[30px] hover:-translate-x-[10px] duration-300 ease-in-out" />
                            </div>
                            <div className="max-md:block">
                                <h4 className="font-normal mb-2 text-[18px] max-md:flex max-md:justify-center">Quick payment</h4>
                                <p className="text-muted max-md:flex max-md:justify-center">Online quick payment</p>
                            </div>
                        </div>

                        <div className="col-xl-3 flex items-center justify-start  col-md-6 max-md:pb-7 max-md:block max-xl:pt-[30px] max-md:pt-0">
                            <div className="px-4 max-md:pb-[20px] max-md:flex max-md:justify-center ">
                                <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Easy-return-1-10.svg" title="" alt="" loading="lazy" width={30} height={30} className="max-md:w-[45px] max-sm:w-[30px] hover:-translate-x-[10px] duration-300 ease-in-out" />
                            </div>
                            <div className="max-md:block">
                                <h4 className="font-normal mb-2 text-[18px] max-md:flex max-md:justify-center">Easy return</h4>
                                <p className="text-muted max-md:flex max-md:justify-center">Return within 24 hours</p>
                            </div>
                        </div>

                        <div className="col-xl-3 flex items-center justify-start  col-md-6 max-md:pb-7 max-md:block  max-xl:pt-[30px] max-md:pt-0">
                            <div className="px-4 max-md:pb-[20px] max-md:flex max-md:justify-center">
                                <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Support-1-15.svg" title="" alt="" loading="lazy" width={30} height={30} className="max-md:w-[45px] max-sm:w-[30px] hover:-translate-x-[10px] duration-300 ease-in-out" />
                            </div>
                            <div className="max-md:block">
                                <h4 className="font-normal mb-2 text-[18px] max-md:flex max-md:justify-center">24/7 Support</h4>
                                <p className="text-muted max-md:flex max-md:justify-center">Customer Support</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Service;
