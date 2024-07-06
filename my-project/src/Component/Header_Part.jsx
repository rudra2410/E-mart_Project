import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { NavLink } from 'react-router-dom'



const Header_Part = () => {
  return (
    <div>
      <Container className='mt-5 mb-10 max-xl:mb-4'>
        <section className='flex row justify-between m-auto max-md:block'>
          <div className='w-[36%] flex justify-center items-center max-md:w-[100%]'>
            <div className='text-center max-md:text-start'>
              <div>
                <h1 className='text-[67px] mb-3 text-[#000a12] font-normal max-lg:text-[60px] max-md:text-[43px]'>Plant a tree for better world</h1>
                <p className='text-muted px-3 text-[#666666] leading-7'>Rectangle follower distribute device layer. Library hand ellipse device strikethrough.</p>
                <div className='my-5'>
                  <a href=" ">
                    <button className='py-[12px] px-[40px] border-1 border-black font-semibold hover:bg-black hover:text-white hover:-translate-y-[5px] duration-300 ease-in'><NavLink to={'./Shop_Now'}>Shop Now</NavLink></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[60%] flex justify-between max-md:w-[100%] max-md:mt-6'>
            <div className='pt-[70px] w-[48%] max-md:hidden hover-img'>
              <img decoding="async" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-first.webp" className="hover:-translate-x-[15px] duration-300 ease-in-out" alt="plants-banner-first" loading="lazy" />
            </div>
            <div className=' pb-[70px] w-[48%] max-md:w-[100%]'>
              <img decoding="async" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-2nd.webp" className="hover:-translate-x-[15px] duration-300 ease-in-out" alt="plants-banner-2nd" loading="lazy" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Header_Part
