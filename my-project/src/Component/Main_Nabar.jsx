import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Main_Navbar() {
  const result = useSelector((state) => state.reducer);
  const WishList = useSelector((state) => state.Wish_reducer);

  console.warn("HeaderData called", result);
  console.warn("WishlistData called", WishList);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [demo, setdemo] = useState(false)
  const mouseenter = (e) => {
    setdemo(true)
  }
  const mouseout = (e) => {
    setdemo(false)
  }

  const [Product, setproduct] = useState(false)
  const Productmouseenter = (e) => {
    setproduct(true)
  }
  const Productmouseout = (e) => {
    setproduct(false)
  }

  const [Shop, setShop] = useState(false)
  const Shopmouseenter = (e) => {
    setShop(true)
  }
  const Shoptmouseout = (e) => {
    setShop(false)
  }
  
  const [Blog, setBlog] = useState(false)
  const Blogmouseenter = (e) => {
    setBlog(true)
  }
  const Blogmouseout = (e) => {
    setBlog(false)
  }

  const [Contact, setContact] = useState(false)
  const Contactmouseenter = (e) => {
    setContact(true)
  }
  const Contactmouseout = (e) => {
    setContact(false)
  }

  return (
    <Navbar collapseOnSelect expand="xl" className="flex items-center container z-10">
      <Container fluid className='flex justify-between'>
        <Navbar.Brand href="#home" className='max-xl:order-2'>
          <NavLink to={'/'}>
            <img alt="logo" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" width={140} height={31} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} className='d-xl-none max-xl:order-1' />
        <Offcanvas show={show} onHide={handleClose} responsive="xl" >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>   <img alt="logo" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" width={100} height={25} /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='bg-white'>
            <Nav className="flex justify-center pe-5">

              {/* Demo */}
              <NavDropdown title={
                <div className='flex justify-between items-center drop font-semibold icon max-xl:border-b-[1px] max-xl:px-0 translate-x-[540px]'>
                  Demo<span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down arrow"><polyline points="6 9 12 15 18 9" className='arrow'></polyline></svg></span>
                </div> 
              } show={demo} onMouseEnter={mouseenter} onMouseLeave={mouseout} className="-translate-x-[540px] max-sm:translate-x-0">  
                <div className='h-[1px] bg-[#c7c8cb] max-xl:hidden'></div>
                <section className='flex justify-evenly max-xl:justify-between items-center w-screen h-[500px] max-xl:ml-0 max-xl:w-block max-xl:h-auto m-auto max-xl:border-b-[1px] mt-[12px]'>
                  <div className='flex max-xl:block py-[50px] max-xl:py-0 pl-[50px] justify-center'>

                    <div className='max-xl:hidden max-xl:ml-0 '>
                      <div className='py-[50px] max-xl:p-0'>
                        <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp" alt="" />
                        <div className=''>
                          <p className='mb-[8px] text-[21px] pt-[20px] pb-[10px]'>New Product on the market</p>
                          <p className='font-bold text-[16px] text-muted add'><NavLink to='shop_now'>Shop Now</NavLink></p>
                        </div>
                      </div>
                    </div>

                    <div className='leading-8 max-xl:leading-6 py-[60px] pl-[80px] pr-2 max-xl:m-0 max-xl:my-0 max-xl:border-0 max-xl:p-0 max-xl:pl-0'>
                      <NavDropdown.Item href="#action2" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Fashion Hub </NavDropdown.Item>
                      <NavDropdown.Item href="#action3" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Kids Wear </NavDropdown.Item>
                      <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out leading-0'>Women <br className='max-xl:hidden ' /> Fashion </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Big Fashion</NavDropdown.Item>
                      <NavDropdown.Item href="#action6" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Handicarft</NavDropdown.Item>
                      <NavDropdown.Item href="#action7" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Interior </NavDropdown.Item>
                    </div>

                    <div className='bg-[#c7c8cb] w-[1px] -mt-[15px] -mb-[16px] ml-10 max-xl:hidden'></div>
                    <div className='py-[50px] pl-[80px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 max-xl:pl-0'>
                      <NavDropdown.Item href="#action8" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>
                        <NavLink to="/">
                          Plant Garden
                        </NavLink></NavDropdown.Item>
                      <NavDropdown.Item href="#action9" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Kids Toys </NavDropdown.Item>
                      <NavDropdown.Item href="#action10" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>Electronic Gadget</NavDropdown.Item>
                      <NavDropdown.Item href="#action11" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>Bathroom</NavDropdown.Item>
                      <NavDropdown.Item href="#action12" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Bicycle</NavDropdown.Item>
                      <NavDropdown.Item href="#action13" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Shoes</NavDropdown.Item>
                      <NavDropdown.Item href="#action14" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Bags</NavDropdown.Item>
                    </div>

                    <div className='bg-[#c7c8cb] w-[1px] -mt-[15px] -mb-[16px] ml-10 max-xl:hidden'></div>
                    <div className='py-[50px] pl-[80px] pr-[10px] max-xl:p-0 leading-8 max-xl:leading-6'>
                      <NavDropdown.Item href="#action15" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Soap </NavDropdown.Item>
                      <NavDropdown.Item href="#action16" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Skin Care</NavDropdown.Item>
                      <NavDropdown.Item href="#action17" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Grocery Outlet <span className='text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]'>New</span></NavDropdown.Item>

                      <NavDropdown.Item href="#action18" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Hiking Heaven <span className='text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]'>New</span></NavDropdown.Item>
                      <NavDropdown.Item href="#action19" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Exotic Fragrances<span className='text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]'>New</span></NavDropdown.Item>
                    </div>
                  </div>
                </section>
                <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>

                <section className=' max-xl:hidden container'>
                  <div className='flex  items-center justify-end py-[15px] pe-[250px]'>
                    <p className='text-danger flex'>Summer Sale 65% Off
                      <span>
                        <a href="../Shop_Now" className='text-muted ml-2 add'>Shop Now</a>
                      </span>
                    </p>
                  </div>
                </section>
                <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>

              </NavDropdown>


              <NavDropdown title={
                <div className='flex justify-between items-center drop font-semibold icon max-xl:border-b-[1px] max-xl:px-0 translate-x-[622px]'>
                Product<span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down arrow "><polyline points="6 9 12 15 18 9" className='arrow '></polyline></svg></span>
                </div>
              } show={Product} onMouseEnter={Productmouseenter} onMouseLeave={Productmouseout} className="-translate-x-[622px] max-sm:translate-x-0">
                <div className='h-[1px] bg-[#c7c8cb] max-xl:hidden'></div>
                <section className='w-screen flex max-xl:block items-center  max-xl:m-0 max-xl:w-auto max-xl:leading-6 m-auto max-xl:border-b-[1px] justify-evenly'>
                  <div className='flex max-xl:block'>
                    <div className='max-xl:hidden'>
                      <div className='py-[50px]  pr-[10px] '>
                        <img width="250px" height="350px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-3rd.webp" alt="" loading="lazy" />
                        <div className='pt-[20px] leading-6'>
                          <p className='text-base'>Each product has a number for <br /> Easy indentification.</p>
                        </div>
                      </div>
                    </div>
                    <div className='max-xl:hidden'>
                      <div className='py-[50px]  pr-[20px] pl-[30px]'>
                        <img width="250px" height="350px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp" alt="peace-lily-02" loading="lazy" />
                        <div className='pt-[20px] leading-6'>
                          <p className='text-base'>It's just a product of your fevered <br /> imagination!</p>
                        </div>
                      </div>
                    </div>
                    <div className='py-[60px] pl-[40px] pr-[20px] max-xl:p-0'>
                      <div className='pt-1 pb-8 ml-2 max-xl:hidden'>
                        <img width="45" height="45" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/dress-02.png" alt="" loading="lazy" />
                      </div>
                      <NavDropdown.Item href="#action20" className='font-bold py-[8px] text-[19px] '> Prodect Style </NavDropdown.Item>
                      <NavDropdown.Item href="#action22" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>
                        <NavLink to="styleOne">Style One</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action22" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>
                        <NavLink to="styleTwo">Style Two</NavLink></NavDropdown.Item>
                      <NavDropdown.Item href="#action23" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>
                        <NavLink to="styleThree">Style Three</NavLink></NavDropdown.Item>
                      <NavDropdown.Item href="#action24" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>
                        <NavLink to="styleFour"> Style Four</NavLink>
                      </NavDropdown.Item>
                    </div>
                    <div className='bg-[#c7c8cb] w-[1px]  ml-10 max-xl:hidden'></div>

                    <div className='py-[60px] pl-[40px] pr-[20px]  max-xl:p-0'>
                      <div className='pt-1 pb-7 ml-2 max-xl:hidden'>
                        <img width="48" height="48" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/school-bag.png" alt="" loading="lazy" />
                      </div>
                      <NavDropdown.Item href="#action25" className='font-bold py-[8px] text-[19px] '> Product Gallery </NavDropdown.Item>
                      <NavDropdown.Item href="#action26" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Vertical Carousel </NavDropdown.Item>
                      <NavDropdown.Item href="#action27" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'><NavLink to='carousal'>
                      Carousal
                      </NavLink></NavDropdown.Item>
                      <NavDropdown.Item href="#action28" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>Horizontal Style</NavDropdown.Item>
                      <NavDropdown.Item href="#action29" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'><NavLink to="gridStyle"> Grid Style</NavLink></NavDropdown.Item>
                    </div>
                    <div className='bg-[#c7c8cb] w-[1px]  ml-10 max-xl:hidden'></div>
                    <div className='py-[60px] pr-20 pl-[40px] max-xl:p-0'>
                      <div className='pt-1 pb-7 ml-2 max-xl:hidden'>
                        <img width="48" height="48" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/chair-1.png" alt="" loading="lazy" />
                      </div>
                      <NavDropdown.Item href="#action30" className='font-bold py-[8px] text-[19px] '> Prodect Style </NavDropdown.Item>
                      <NavDropdown.Item href="#action31" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Simple Product </NavDropdown.Item>
                      <NavDropdown.Item href="#action32" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>Variable Product</NavDropdown.Item>
                    </div>
                  </div>
                </section>
                <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>
                <section className=' max-xl:hidden container'>
                  <div className='flex  items-center justify-end py-[15px] pe-[250px]'>
                    <p className='text-danger flex'>Summer Sale 65% Off
                      <span>
                        <a href="#" className='text-muted ml-2 add'>Shop Now</a>
                      </span>
                    </p>
                  </div>
                </section>
                <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>
              </NavDropdown>


              {/* shop */}
              <NavDropdown title={
                <div className='flex justify-between items-center drop font-semibold icon max-xl:border-b-[1px] translate-x-[718px]' >
                  Shop<span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down arrow "><polyline points="6 9 12 15 18 9" className='arrow '></polyline></svg></span>
                </div>
              } show={Shop} onMouseEnter={Shopmouseenter} onMouseLeave={Shoptmouseout} className='-translate-x-[718px]'>

                <div className='h-[1px] bg-[#c7c8cb] max-xl:hidden'></div>
                <section className='flex justify-evenly items-center w-screen max-xl:ml-0 max-xl:w-block max-xl:h-auto m-auto max-xl:border-b-[1px]  '>
                  <div className='flex max-xl:block '>

                    <div className='max-xl:ml-0  py-[60px] max-xl:p-0 pr-[60px] pl-[40px]'>

                      <NavDropdown.Item href="#action33" className='font-bold py-[8px] text-[19px] '> Listing Layouts </NavDropdown.Item>
                      <NavDropdown.Item href="#action34" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> 4 Column</NavDropdown.Item>
                      <NavDropdown.Item href="#action35" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> <NavLink to="col_Sidebar"> 4 Column + Side bar</NavLink> </NavDropdown.Item>
                      <NavDropdown.Item href="#action36" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> 5 Column </NavDropdown.Item>
                      <NavDropdown.Item href="#action37" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> 5 Column + Side bar</NavDropdown.Item>

                      <div className='mt-[20px]'>
                        <NavDropdown.Item href="#action38" className='font-bold py-[8px] text-[19px] '> Shop Pages </NavDropdown.Item>
                        <NavDropdown.Item href="#action39" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'><NavLink to="wishlist">Wishlist</NavLink></NavDropdown.Item>
                        <NavDropdown.Item href="#action40" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> <NavLink to="cart">Cart</NavLink></NavDropdown.Item>
                        <NavDropdown.Item href="#action41" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> <NavLink to='checkout'>Checkout</NavLink> </NavDropdown.Item>
                      </div>
                    </div>

                    <div className='bg-[#c7c8cb] w-[1px] ml-10 max-xl:hidden'></div>

                    <div className='pl-[40px] py-[60px] max-xl:p-0 pr-[60px]'>
                      <NavDropdown.Item href="#action42" className='font-bold py-[8px] text-[19px]'> Sidebar Widgets </NavDropdown.Item>
                      <NavDropdown.Item href="#action43" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>  Product Filter at Top</NavDropdown.Item>
                      <NavDropdown.Item href="#action44" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>  Product Filter at Left</NavDropdown.Item>
                      <NavDropdown.Item href="#action45" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Product Filter at Right</NavDropdown.Item>
                    </div>

                    <div className='bg-[#c7c8cb] w-[1px] ml-10 max-xl:hidden'></div>
                    <div className='pl-[40px] py-[60px] max-xl:p-0 pr-[60px]'>
                      <NavDropdown.Item href="#action46" className='font-bold py-[8px] text-[19px]'> Shop Box styles</NavDropdown.Item>
                      <NavDropdown.Item href="#action47" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>  Shop Style One</NavDropdown.Item>
                      <NavDropdown.Item href="#action48" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>  Shop Style Two</NavDropdown.Item>
                      <NavDropdown.Item href="#action49" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Shop Style Three</NavDropdown.Item>
                      <NavDropdown.Item href="#action51" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Shop Style Four</NavDropdown.Item>
                    </div>

                    <div className='bg-[#c7c8cb] w-[1px] ml-10 max-xl:hidden'></div>
                    <div className='max-xl:hidden ml-[80px] my-[60px]'>
                      <div className='relative'>
                        <img width="360px" height="450px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/New-Project.webp" className="attachment-large size-large wp-image-279" alt="" loading="lazy" />
                        <div className='absolute text-3xl text-white -my-[225px] ml-[40px] tracking-winder'>
                          <p>On The Weekend</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className=' max-xl:hidden'>
                  <div className='h-[1px] bg-[#c7c8cb] max-xl:hidden'></div>
                  <div className='flex  items-center justify-center py-[15px] '>
                    <p className='text-danger flex'>Summer Sale 65% Off
                      <span>
                        <a href="#" className='text-muted ml-2 '>Shop Now</a>
                      </span>
                    </p>
                  </div>
                  <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>
                </section>
              </NavDropdown>

              {/* Blog */}
              <NavDropdown title={
                <div className='flex justify-between drop items-center font-semibold icon max-xl:border-b-[1px] '>
                  Blog<span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" className="feather feather-chevron-down arrow "><polyline points="6 9 12 15 18 9" className='arrow '></polyline></svg></span>
                </div>
              } show={Blog} onMouseEnter={Blogmouseenter} onMouseLeave={Blogmouseout}>
                <div className='pl-[20px] pr-[130px] py-3 border-1 border-gray-300 max-md:p-0 max-md:border-0'>
                  <NavDropdown.Item href="#action52" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>
                  <NavLink to="Blog">Default Blog</NavLink> </NavDropdown.Item>
                  <NavDropdown.Item href="#action53" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'> Blog One </NavDropdown.Item>
                  <NavDropdown.Item href="#action54" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'>Blog Two</NavDropdown.Item>
                  <NavDropdown.Item href="#action55" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'><NavLink to="blog_three">
                    Blog Three
                  </NavLink></NavDropdown.Item>
                </div>
              </NavDropdown>

              {/* Contact */}
              <NavDropdown title={
                <div className='flex justify-between items-center drop font-semibold icon max-xl:border-b-[1px] '>
                  Contact<span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down arrow"><polyline points="6 9 12 15 18 9" className='arrow '></polyline></svg></span>
                </div>
              } show={Contact} onMouseEnter={Contactmouseenter} onMouseLeave={Contactmouseout}>
                <div className='pl-[20px] pr-[130px] py-3 border-1 border-gray-300 max-md:p-0 max-md:border-0'>
                  <NavDropdown.Item href="#action56" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'><NavLink to="contactUs">Contact One</NavLink></NavDropdown.Item>
                  <NavDropdown.Item href="#action57" className='text-muted py-[8px] text-[18px] hover:translate-x-[13px] duration-300 ease-in-out'><NavLink to="contact_Two">
                    Contact Two
                  </NavLink></NavDropdown.Item>
                </div>

              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Nav className='flex items-center order-3'>
          <div className='flex justify-between'>
            <div className='max-xl:hidden max-xl:pr-0 pr-2 '>
              <a href="" className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </a>
            </div>

            <div className='max-xl:pr-0 ml-2  pr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>

            <div className='max-xl:hidden ml-2 flex  max-xl:pr-0 pr-2 '>
              <a href={'./wishlist'} className='flex '>
                <span className="wishlist_products_counter_text"><img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/heart-wishlist-icon.svg" alt="Wishlist-logo" /> </span>
                <span className='-mt-4 font-semibold'>{WishList.length}</span>
              </a>
            </div>

            <div className='flex max-md:-mr-2 ml-2 max-xl:pr-0 pr-2'>
            <NavLink to="cart">
              <span className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span className='-mt-4 font-semibold'>{result.length}</span>
              </span>
            </NavLink>
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>

  );
}

export default Main_Navbar;