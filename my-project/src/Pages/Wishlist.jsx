import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useSelector , useDispatch } from 'react-redux'
import { addToCart , RemoveToWishlist } from '../Product_Data/Redux/Action';

const Wishlist = () => {
   
    const dispatch = useDispatch();
    const wishlistData = useSelector((state) => state.Wish_reducer);

    let date = new Date()


    const Add_Cart = (item) => {
      dispatch(addToCart(item));
      dispatch(RemoveToWishlist(item.id));
    }
    
  return (
    <div className='bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]'>
      <Container>
        {
          wishlistData.length === 0 ? (

          <div className='py-[150px]'>
            <div className='mb-[50px] shadow-2xl shodow-gray-700'>
              <p className='py-[18px] bg-white text-[18px] px-[25px]'>Your Wishlist is currently empty.</p>
            </div>
            <button className='hover:-translate-y-[10px] duration-300 ease-in-out'>
              <a href="./Shop_Now" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>
                Return To Shop
              </a>
            </button>
          </div>
          ) : (
          <div className="flex container mx-auto justify-between">
          <div className="w-[70%] text-center table-fixed bg-white ">
                <div>
                  <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                    <div className="col-6 font-normal">Products</div>
                    <div className="col-2 font-normal">Price</div>
                    <div className="col-2 font-normal">Date Added</div>
                    <div className="col-2 font-normal"></div>
                  </div>
                </div>
                <hr />
                {wishlistData.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="flex justify-between pt-[30px] items-center py-[30px] ">
                        <div className="flex col-6 items-center">
                          <button  onClick={() => dispatch(RemoveToWishlist(item.id))} className='btn btn-denger btn-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                          </button>
                          <img
                            className="max-w-[102px] w-[102px] h-[102px] col-6 object-cover"
                            src={item.img}
                            alt=""
                          />
                          <div className="col-6 ">{item.name}</div>
                        </div>
                        <div className="col-2">{item.d_price}</div>
                        <div className="col-2 items-center flex justify-center text-wrap max-md:w-auto max-md:justify-start">
                      {date.toDateString()}
                    </div>
                          <button className="w-36 col-3 hover:-translate-y-[10px] duration-300 ease-in-out max-md:w-[100%] flex justify-center text-white py-[5px] px-[30px] bg-black text-[17px]  max-lg:py-[5px] checkout hover:border-2 hover:border-black" onClick={() => Add_Cart(item)}>
                            Add To Cart
                          </button>
                      </div>
                      <hr />  
                    </div>
                  );
                })}
              </div>
            </div>
          )
        }

      </Container>
    </div>
  );
};

export default Wishlist
