import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { removeToCart } from "../Product_Data/Redux/Action";
import { increment } from "../Product_Data/Redux/Action";
import { decrement } from "../Product_Data/Redux/Action";
import { NavLink } from "react-router-dom";
import { FaTruck } from "react-icons/fa";

const Cart = () => {

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer);
  const totalamount = cartData.reduce((total , item) => total +(item.d_price * item.quantity) ,0);

  return(
    <div className=''>
      {cartData.length === 0 ? (
        <div className=''>
          <section className='py-[185px] px-[15px]' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
              <div className='mx-[272px] max-2xl:mx-[50px] max-lg:mx-2'>
                  <div>
                      <div className=''>
                          <p className='px-[20px] text-[16px] text-[#515151] py-[15px] mb-[35px] bg-[#fff] shadow-lg shadow-slate-100'>Your cart is currently empty.</p>
                          <p className='mb-[40px] hover:-translate-y-1 duration-300 ease-in-out'>
                              <NavLink to="/shop_now" className='border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black'>Return to shop</NavLink>
                          </p>
                      </div>
                  </div>
              </div>
          </section>
        </div>
      ) : (
        <div className='py-[120px] px-[15px]' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
          <div className='container'>
            <div className='flex max-lg:block'>
              <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12 bg-white shadow-lg shadow-slate-100 p-[30px] mr-[15px] max-lg:mr-0'>
                <div className='p-[20px] mb-[50px] border-dashed border-[2px] border-[#e9e9e9]'>
                  <span>
                    Buy <span className='text-red-600'>$ 1451</span> more for get <strong>Free Shipping!!</strong> 
                  </span>
                  <div className="progress h-[6px]  mt-3 max-sm:hidden " role="progressbar">
                    <div className="progress-bar progress-bar-striped bg-danger w-full"></div>
                  </div>
                  <div className=''>
                    <span className='bg-red-500 h-3 w-full'></span>
                  </div>
                </div>
                <form  className='max-lg:pb-10 max-md:pb-28 max-sm:pb-28'>
                  <table className='mb-[24px] -mr-[1px] text-left w-full'>
                    <thead>
                      <tr className='max-md:hidden'>
                        <th className='font-[500] align-middle pr-[12px] pb-[9px]'>&nbsp;</th>
                        <th className='font-[500] align-middle pr-[12px] pb-[9px]  min-w-[32px]'>&nbsp;</th>
                        <th className='font-[400] align-middle pr-[12px] pb-[9px] !pl-0 text-[#000a12] text-[16px] !leading-[28px]'>Products</th>
                        <th className='font-[400] align-middle pr-[12px] pb-[9px] !pl-0 text-[#000a12] text-[16px] !leading-[28px]'>Price</th>
                        <th className='font-[400] align-middle pr-[12px] text-center pb-[9px]  text-[#000a12] text-[16px] !leading-[28px]'>Quantity</th>
                        <th className='font-[400] align-middle pr-0 pb-[9px] !pl-0 text-[#000a12] text-[16px] !leading-[28px] text-right'>Total</th>
                      </tr>
                    </thead>
                    {cartData.map((item) => {
                      return(
                        <tbody key={item.id}>
                          <tr className=''>
                            <td className='border-t-[1px] py-[25px] pr-[8px] max-md:block'>
                              <button onClick={() => dispatch(removeToCart(item.id))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                                </svg>
                              </button>
                            </td>
                            <td className='border-t-[1px] py-[25px] pr-[10px] max-md:block'>
                              <div className=''><img src={item.img} alt="" className='max-w-[102px] h-[102px] w-[102px] object-cover '/>
                              </div>
                            </td>
                            <td className='border-t-[1px] py-[25px] pr-[50px] max-md:block'>
                              <div className=''>
                                {item.name}
                              </div>
                            </td>
                            <td className='border-t-[1px] py-[25px] pr-[15px] max-md:block'>
                              <div className=''>
                                $ {item.d_price}.00
                              </div>
                            </td>
                            <td className='border-t-[1px] py-[25px] pr-[20px]  max-md:block'>
                              <div className='flex items-center border-[1px] justify-between p-2 '>
                               <a onClick={() => dispatch(decrement(item.id))} className='cursor-pointer'> - </a> 
                                <p className='text-[14px]'>{item.quantity}</p>
                                <a onClick={() => dispatch(increment(item.id))} className='cursor-pointer'> + </a>
                              </div>
                            </td>
                            <td className='border-t-[1px] py-[25px] max-md:block'>
                              <div className='text-right max-md:text-left'>
                                $ {item.quantity * item.d_price}.00
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      )
                    })}
                  </table>
                    <div className=''>
                      <div colSpan={6} className='border-t-[1px] pt-[25px]'>
                        <div className='float-left text-center flex items-center max-md:block'>
                          <input type="search" placeholder='Coupon Code' size={15} className='text-[18px] max-sm:text-[16px] outline-none placeholder-black border-[1px] border-[#d3ced2] py-[11px] pl-[30px] pr-[15px] max-md:w-full' />
                          <button type='submit' className='px-[33px] py-[11px] border-black border-[1px] bg-black text-white text-[18px] max-sm:text-[16px] font-[500] font-[Jost] hover:!bg-white hover:!text-black duration-200 max-md:w-full max-md:mt-3'>Apply Coupon</button>
                        </div>
                      </div>
                    </div>
                </form>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 p-[30px] xl:ml-2 h-full  max-lg:mt-5 bg-white shadow-lg shadow-slate-100'>
                <div className="">
                  <h4 className="py-[10px] font-[Jost] ">Cart Totals</h4>
                  <div className="flex justify-between items-center pt-[30px] pb-[20px] border-t-[1px] border-[#d3ced2]">
                    <span>Subtotal</span>
                    <span>$ {totalamount}.00</span>
                  </div>
                  
                  <div className="leading-10 py-[15px] border-t-[1px] border-[#d3ced2]">
                    <h1>Shipping</h1>
                    <div className="flex justify-between">
                      <span>Flat Rate :</span>
                      <span>$ 10.00</span>
                    </div>
                    <div>
                      Shipping to <span className="font-bold">CA</span>
                    </div>
                    <h4 className='flex'>Change address <FaTruck className='flex items-center justify-center mt-1 w-10' /></h4>
                  </div>
                </div>
                <div className="flex justify-between py-[15px] border-t-[1px] border-[#d3ced2] leading-10 items-center">
                  <span className='text-[18px] font-[500]'>Total </span>
                  <span>$ {totalamount}.00</span>
                </div>
                <div className='flex justify-center pb-2 mt-4'> 
                  <NavLink to="/checkout" className='border-[1px] border-black font-[500] duration-300 w-full text-center hover:!bg-white hover:!text-black px-[33px] py-[12px] text-white font-[Jost] text-[18px] max-sm:text-[16px] bg-black hover:-translate-y-2 ease-in-out'>Proceed To Checkout</NavLink>
                </div>
                <div className='flex justify-center mt-2'> 
                  <NavLink to="/shopnow" className='border-[1px] border-black font-[500] duration-300 w-full text-center hover:!bg-white hover:!text-black px-[33px] py-[12px] text-white font-[Jost] text-[18px] max-sm:text-[16px] bg-black hover:-translate-y-2 ease-in-out'>Return to shop</NavLink>
                </div>
                
              </div>
            </div>
          </div>

        </div>

  )}
  </div>
  )  
}
export default Cart;
