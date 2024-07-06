import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import { useDispatch , useSelector } from 'react-redux'
import { addToCart , addToWishlist } from '../Product_Data/Redux/Action'
import { productData } from '../Product_Data/ProductRedux/ProductAction'
import heart from '../assets/heart.svg'
import Eyes from '../assets/Eyes.svg'
import Cart from '../assets/Cart.svg'

const Shop_Now = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.ProductReducer)
  console.log('maindata' ,data);

  useEffect(()=>{
    dispatch(productData())
  }, [])

  return (
    <div className='pt-[70px]'>
      <Container>
        <div>
          <div className='flex text-[14px]'>
            <span><a href="">Home /</a></span>
            <span><a href="">Shop </a></span>
          </div>
          <section className='flex justify-between items-center mt-[20px]'>
            <div>
              <span className='text-muted'>Showing all 11 results</span>
            </div>
            <div className='flex row items-center'>
              <div className='col-3'>
                <button className='flex '>Filters <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="result-icon"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="currentColor" d="M3.749 7.508a.75.75 0 010-1.5h3.138a2.247 2.247 0 014.243 0h9.121a.75.75 0 010 1.5h-9.126a2.248 2.248 0 01-4.232 0H3.749zm13.373 9h3.129a.75.75 0 010 1.5h-3.135a2.247 2.247 0 01-4.231 0H3.749a.75.75 0 010-1.5h9.13a2.248 2.248 0 014.243 0z"></path></g></svg></button>
              </div>
              <div className='flex col-6'>
                <Form.Select aria-label="Default sorting">
                  <option value="1">Default sorting</option>
                  <option value="2">Sort by popularity</option>
                  <option value="3">Sort by average rating</option>
                  <option value="4">Sort by latest</option>
                  <option value="5">Sort by price :low to high</option>
                  <option value="6">Sort by price :high to low</option>
                </Form.Select>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="currentColor" d="M7.445 7.48V5.672L5.665 7.48h1.78zm1.09-4.42c.304.12.465.39.465.706v16.437a.784.784 0 01-.783.797.762.762 0 01-.772-.781V8.982H4.003a.832.832 0 01-.765-.204.759.759 0 01.002-1.105L7.652 3.23a.832.832 0 01.882-.17zm8.02 15.269l1.78-1.81h-1.78v1.81zm4.207-3.107a.76.76 0 01-.002 1.106l-4.412 4.442a.832.832 0 01-.882.17c-.305-.12-.466-.39-.466-.706V3.797c0-.432.332-.797.783-.797.45 0 .772.35.772.781v11.237h3.442a.833.833 0 01.765.204z"></path></g></svg>
              </div>
              <div className='col-3'>
              <button></button>
              <button></button>
              <button></button>

              </div>

            </div>
          </section>

          <div  className='flex justify-between row flex-wrap mt-[100px]'>
                {data.flat().map((item) =>{
                  return(
                    <>
                      <div  key={item.id} className='col-6 col-lg-3 relative '>
                            <div className='absolute right-5 top-3  z-1 max-md:hidden'>
                                <span className='text-white bg-black px-2 '>-33%</span>
                            </div>
                            <div className='relative primary-img'>
                                <div className='overflow-hidden relative'>
                                    <img  src={item.img} />
                                </div>
                                <div className='absolute left-0 top-0 z-1 shop-icon'>
                                    <div className='p-4'>
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
                                        <div className='p-[12px] flex justify-center bg-white m-2 rounded-full icon-1' >
                                                <img src={Cart} alt="" height={8} width={12} />
                                        </div>
                                            </button>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                                <h5>{item.name}</h5>
                                <p className='text-muted '>
                                    <del className='pr-[8px]'>{item.d_price}</del>
                                    <span>{item.price}</span>
                                </p>
                            </div>
                        </div>
                    </>
                  )
                })}
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Shop_Now
