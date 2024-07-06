import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import heart from '../assets/heart.svg'
import Cart from '../assets/Cart.svg'
import Eyes from '../assets/Eyes.svg'

/* THis is Old website */


const Style_One = () => {
  return (
    <div className=''>
      <div className='bg-[#fcf7ef] '>
        <div className='p-4'>
          <Container>
            <h1 className='text-[29px] max-md:text-[25px]'>Product Style One</h1>
          </Container>
        </div>
      </div>
      <section className='max-md:block max-md:w-[100%] max-md:p-0 my-[80px] container '>
        <div className='flex flex-wrap m-auto col-xs-block'>

          <div className='col-6 col-lg-4 relative border-[20px] border-white Hover:shadow-2xl shadow-gray-700'>
            <div className='absolute right-5  p-3 z-1 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-33%</span>
            </div>

            <div className='relative primary-img'>
              <div className='overflow-hidden relative'>
                <img decoding="async" loading="lazy" alt="custom-image" src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" />
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
            <div className='text-center leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]'>
              <h5 className='text-[25px]'>Monstera</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$60</del>
                <span>$48</span>
              </p>
            </div>
          </div>

          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-1 max-md:hidden'>
              <span className='text-white bg-black px-2'>-20%</span>
            </div>
            <div className='relative primary-img'>
              <div className='overflow-hidden relative'>
                <img decoding="async" loading="lazy" alt="custom-image" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp" />
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
            <div className='text-center leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]'>
              <h5 className='text-[25px]'>Hawothia</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$87</del>
                <span>$70</span>
              </p>
            </div>
          </div>

          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-1 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-20%</span>
            </div>

            <div className='relative primary-img'>
              <div className='overflow-hidden relative'>
                <img decoding="async" loading="lazy" alt="custom-image" src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp" />
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
            <div className='text-center leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]'>
              <h5 className='text-[25px]'>Bird's nest fern</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$60</del>
                <span>$54</span>
              </p>
            </div>
          </div>

          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-1 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-20%</span>
            </div>
            <div className='relative primary-img'>
              <div className='overflow-hidden relative'>
                <img decoding="async" loading="lazy" alt="custom-image" src="		https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp" />
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
            <div className='text-center leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]'>
              <h5 className='text-[25px]'>Peace lily</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$72</del>
                <span>$64</span>
              </p>
            </div>
          </div>

          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='relative primary-img'>
              <div className='overflow-hidden relative'>
                <img decoding="async" loading="lazy" alt="custom-image" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/barrel-cactus-01.webp" />
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
            <div className='text-center leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]'>
              <h5 className='text-[25px]'>Barrel cactus</h5>
              <p className='text-muted '>
                <span>$67.00</span>
              </p>
            </div>
          </div>

          <div className='col-6 col-lg-4 relative border-[20px] border-white'>
            <div className='absolute right-5  p-3 z-1 max-md:hidden'>
              <span className='text-white bg-black px-2 '>-20%</span>
            </div>
            <div className='relative primary-img'>
              <div className='overflow-hidden relative'>
                <img decoding="async" loading="lazy" alt="custom-image" src="	https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" />
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
            <div className='text-center leading-8 py-[15px] max-md:px-0 max-sm:py-[15px]'>
              <h5 className='text-[25px]'>Monstera Plant</h5>
              <p className='text-muted '>
                <del className='pr-[8px]'>$60</del>
                <span>$48</span>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Style_One 
