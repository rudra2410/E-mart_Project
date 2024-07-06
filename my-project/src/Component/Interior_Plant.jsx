import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import heart from '../assets/heart.svg'
import Eyes from '../assets/Eyes.svg'
import Cart from '../assets/Cart.svg'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart , addToWishlist } from '../Product_Data/Redux/Action'  





const Interior_Plant = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.ProductReducer)
  console.log('maindata' ,data);

  return (
    <div className='continer flex justify-center py-[40px] max-xl:p-0 overflow-hidden'>
      <Container>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-[42px] font-normal capitalize max-md:text-[30px] font-[Jost] text-[#000a12]'>Best interior plants</h1>
            <p className='pt-4 text-muted'>Rectangle follower library hand ellipse device strikethrough.</p>
          </div>
        </div>

        <div className='max-sm:py-[30px] py-[50px]'>
          <section className='flex max-md:block   m-auto justify-between overflow-hidden '>

            <section className='w-[40%] max-md:w-[100%] max-md:mb-[20px] interior-img top-0 ms-2'>
              <img decoding="async" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plant-gallery-left-img.webp" alt="plant-gallery-left-img" loading="lazy" className="hover:-ms-[15px] duration-300 ease-in-out" />
            </section>
            <section className='w-[57%] pl-5 max-md:block max-md:w-[100%] max-md:p-0 '>
              <div className='flex flex-wrap row '>

              <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-5 top-3 z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-20%</span>
                  </div>
                  <div className='relative primary-img'>
                    <div className='overflow-hidden relative'>
                      <img decoding="async" loading="lazy" alt="custom-image"src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" />
                    </div>
                    <div className='absolute left-0 top-0 z-1 shop-icon'>
                      <div className='p-3'>
                      <button onClick={() => dispatch(addToWishlist(item))}>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                                <img src={heart} alt="" height={16} width={16} />
                        </div>
                            </button>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                            <a href="">
                                <img src={Eyes} alt="" height={16} width={16} />
                            </a>
                        </div>
                            <button onClick={()=> dispatch(addToCart(item))}>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                                <img src={Cart} alt="" height={8} width={12} />
                        </div>
                            </button>
                      </div>
                    </div>
                  </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[20px]'>
                    <h5>Monstera Plant</h5>
                    <p className='text-muted '>
                      <del className='pr-[8px]'>$60</del>
                      <span>$48</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-5 top-3 z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-40%</span>
                  </div>
                  <div className='relative primary-img'>
                    <div className='overflow-hidden relative'>
                      <img decoding="async" loading="lazy" alt="custom-image"src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp" />
                    </div>
                    <div className='absolute left-0 top-0 z-1 shop-icon'>
                      <div className='p-3'>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="" className=''>
                            <img src={heart} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="">
                            <img src={Eyes} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                          <a href="">
                            <img src={Cart} alt="" height={8} width={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[20px]'>
                    <h5>Hawothia</h5>
                    <p className='text-muted '>
                      <del className='pr-[8px]'>$87</del>
                      <span>$70</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-5 top-3 z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-10%</span>
                  </div>
                  <div className='relative primary-img'>
                    <div className='overflow-hidden relative'>
                      <img decoding="async" loading="lazy" alt="custom-image"src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp" />
                    </div>
                    <div className='absolute left-0 top-0 z-1 shop-icon'>
                      <div className='p-3'>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="" className=''>
                            <img src={heart} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="">
                            <img src={Eyes} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                          <a href="">
                            <img src={Cart} alt="" height={8} width={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[20px]'>
                    <h5>Bird's nest fern</h5>
                    <p className='text-muted '>
                      <del className='pr-[8px]'>$60</del>
                      <span>$54</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-5 top-3 z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-11%</span>
                  </div>
                  <div className='relative primary-img'>
                    <div className='overflow-hidden relative'>
                      <img decoding="async" loading="lazy" alt="custom-image"src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp" />
                    </div>
                    <div className='absolute left-0 top-0 z-1 shop-icon'>
                      <div className='p-3'>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="" className=''>
                            <img src={heart} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="">
                            <img src={Eyes} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                          <a href="">
                            <img src={Cart} alt="" height={8} width={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[20px]'>
                    <h5>Peace lily</h5>
                    <p className='text-muted '>
                      <del className='pr-[8px]'>$72</del>
                      <span>$64</span>
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                <div className='absolute right-5 top-3 z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-50%</span>
                  </div>
                  <div className='relative primary-img'>
                    <div className='overflow-hidden relative'>
                      <img decoding="async" loading="lazy" alt="custom-image"src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/barrel-cactus-01.webp" />
                    </div>
                    <div className='absolute left-0 top-0 z-1 shop-icon'>
                      <div className='p-3'>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="" className=''>
                            <img src={heart} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="">
                            <img src={Eyes} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                          <a href="">
                            <img src={Cart} alt="" height={8} width={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[20px]'>
                    <h5>Barrel cactus</h5>
                    <p className='text-muted '>
                    <span>$67.00</span>
                    </p>
                  </div>
                </div>


                <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                  <div className='absolute right-5 top-3 z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-26%</span>
                  </div>
                  <div className='relative primary-img'>
                    <div className='overflow-hidden relative'>
                      <img decoding="async" loading="lazy" alt="custom-image"src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Snake-Plant.webp" />
                    </div>
                    <div className='absolute left-0 top-0 z-1 shop-icon'>
                      <div className='p-3'>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="" className=''>
                            <img src={heart} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                          <a href="">
                            <img src={Eyes} alt="" height={16} width={16} />
                          </a>
                        </div>
                        <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                          <a href="">
                            <img src={Cart} alt="" height={8} width={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[20px]'>
                    <h5>Snake plant</h5>
                    <p className='text-muted '>
                      <del className='pr-[8px]'>$54</del>
                      <span>$40</span>
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </section>
        </div>
      </Container>


    </div>
  )
}

export default Interior_Plant
