import React from 'react'
import Container from "react-bootstrap/esm/Container";
import { useSelector } from 'react-redux';



const CheckOut = () => {

  const ChakOutData = useSelector((state) => state.reducer)


  const productamount = ChakOutData.reduce((total, item) => total + item.price * item.quntity, 0);
  const finaltotal = productamount + 10


  return (
    <div className='bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc] py-[100px]'>
      <Container>
        {/* {
             CartData.length === 0 &&(

        <div className='py-[150px] mx-[60px]'>
          <div className='mb-[50px] shadow-2xl shodow-gray-700'>
            <p className='py-[18px] bg-white text-[18px] px-[25px]'>Your CheckOut is currently empty.</p>
          </div>
          <NavLink to='/ShopNow'>
          <button className='hover:-translate-y-[10px] duration-300 ease-in-out'><a href="" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>Return To Shop</a></button>
          </NavLink>
        </div>
        
         )} */}
        <div className='px-[100px] max-md:px-[200px]'>
          <div className='bg-white p-[20px] max-md:p-[15px] mb-[12px] text-[#565656] shadow-2xl shodow-gray-700'>
            <span>Returning Customer? Click here to login</span>
          </div>
          <div className='bg-white p-[20px] max-md:p-[10px] text-[#565656] mb-[12px] shadow-2xl shodow-gray-700'>
            <span>Have a Coupon ?  Click hwrw to enter ypur code</span>
          </div>
          <div className='flex justify-between max-xl:block '>
            <div className='w-[63%] bg-white shadow-2xl shadow-gray-500 max-xl-w[100%] p-4'>
              <h1 className='text-[22px] mb-[12px]'> Billing Detalis</h1>
              
              <div className='flex justify-between max-xl:block'>
                <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px] w-[48%] max-xl:w-[100%]'>
                  <input type="text" placeholder='First Name' className='text-black border-none outline-none w-[100%]' />
                </div>
                <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px] w-[48%] max-xl:w-[100%]'>
                  <input type="text" placeholder='Last Name' className='text-black border-none outline-none w-[100%]' />
                </div>
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="text" placeholder='Company Name' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="text" placeholder='United State (US)' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="text" placeholder='Adrees' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="text" placeholder='Addrees' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="text" placeholder='Apartment,suite,unit,etc. (optional)' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="text" placeholder='City' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="text" placeholder='California' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="postal" placeholder='PostCode/Zip' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="tel" placeholder='Phone' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='py-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[15px]  '>
                <input type="email" placeholder='Email Address' className='text-black border-none outline-none w-[100%]' />
              </div>

              <div className='mb-[15px]'>
                <input type="checkbox" />
                <label htmlFor="">Ship to a Different Address?</label>
              </div>

              <div className='pt-[10px] border-[1px] border-[#d9d9d9] ps-[10px] mb-[20px] w-[100%]'>
                <textarea name="" id="" className='w-[100%] outline-none min-h-[100px]' placeholder='Notes about your order,e.g.special notes for delivery.'></textarea>
              </div>
            </div>


            <div className='w-[35%] p-[20px] bg-white shadow-2xl shodow-gray-700 max-xl:w-[100%] max-xl:mt-[30px] pb-[40px]'>
              <h1 className='text-[25px] mb-[12px]'>Your Order</h1>
              <hr />
              <div>
                {
                  // ChakOutData.flat().map((item) => {
                    ChakOutData.flat().map((item) => {
               return (
                      <div key={item.id} >
                      <div className='flex justify-between my-[20px]'>
                        <div className=' flex items-center justify-between w-[100%]'>
                          <div className='flex items-center me-auto'>
                            <div className='me-[12px]' >
                              <img src={item.img} alt="" className='h-24 w-24' />
                            </div>
                            <div className=''>
                              <div>{item.name}</div>
                              <div className='font-bold'>${item.price * item.quntity}.00</div>
                            </div>
                          </div>
                          <div className='ms-auto'>QTY {item.quntity}</div>
                        </div>
                      </div>
                          <hr />
                      </div>
                    )
                  })
                }
                <div>
                  <div className='flex justify-between mt-[15px] mb-[50px]'>
                    <span>SubTotal</span>
                    <span className='font-bold'>${productamount}.00</span>
                  </div>
                  <div className='flex justify-between my-[50px]'>
                    <span>Shpping<br />Flat Rate:</span>
                    <span>$10.00</span>
                  </div>
                  <hr />
                  <div className='flex justify-between my-[30px]'>
                    <span>Total</span>
                    <span className='font-bold'>${finaltotal}.00</span>
                  </div>
                </div>

                <p className='my-[15px]'>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
              </div>
              <hr />
              <p className='text-[12px] mt-[10px] mb-[20px]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
              <div className='w-[100%] hover:-translate-y-[10px] duration-300 ease-in-out max-md:w-[100%] flex justify-center text-white py-[15px] px-[30px] bg-black text-[17px]   checkout hover:border-2 hover:border-black'>
                <button>
                  order Place
                </button>
              </div>
            </div>  
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CheckOut