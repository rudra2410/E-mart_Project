import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Navbar = () => {
  return (
    <div>
            <div className='bg-[#c7b9b6] hidden xl:block '>
                <div className=' flex  justify-center'>
                    <Container>
                <div className='flex justify-between m-auto py-2 text-[15px]'>
                    <span>
                        Free delivery on orders over $1499. Don’t miss discount.
                    </span>
                    <div>
                        <div className='flex justify-evenly'>
                            <div className='flex px-3  border-black border-e-2'>
                                <span className='items-center flex pe-3'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 18" fill="none"><path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.67188 6.59992C6.85996 6.06525 7.2312 5.6144 7.71984 5.32722C8.20848 5.04005 8.78299 4.93507 9.34162 5.03089C9.90024 5.12671 10.4069 5.41714 10.7719 5.85074C11.1369 6.28434 11.3367 6.83314 11.3359 7.39992C11.3359 8.99992 8.93587 9.79992 8.93587 9.79992" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 13H9.008" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                <span >Help & Contact</span>
                            </div>
                            <div className='flex px-3 border-e-2 border-black  '>
                                <span className='items-center flex pe-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 19 18" fill="none"><path d="M15.9991 5.44434V16.9999H2.9082V5.44434" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.4541 1H1.4541V5.44444H17.4541V1Z" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 9H9.90909" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </span>
                                <span >Deals Of the day</span>
                            </div>
                            <div className='flex pl-3 '>
                                <span className='items-center flex pe-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 15 18" fill="none"><path d="M14.0909 7.54545C14.0909 12.6364 7.54546 17 7.54546 17C7.54546 17 1 12.6364 1 7.54545C1 5.80949 1.68961 4.14463 2.91712 2.91712C4.14463 1.68961 5.80949 1 7.54546 1C9.28142 1 10.9463 1.68961 12.1738 2.91712C13.4013 4.14463 14.0909 5.80949 14.0909 7.54545Z" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.5451 9.72716C8.75008 9.72716 9.72692 8.75033 9.72692 7.54534C9.72692 6.34036 8.75008 5.36353 7.5451 5.36353C6.34011 5.36353 5.36328 6.34036 5.36328 7.54534C5.36328 8.75033 6.34011 9.72716 7.5451 9.72716Z" stroke="#000A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </span>
                                <span >Store location</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Container>
                </div>
            </div>
        </div>
  )
}

export default Navbar
