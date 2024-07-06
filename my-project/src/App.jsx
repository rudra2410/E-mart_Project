import React from "react";
import Navbar from "./Component/Navbar";
import Main_Navbar from "./Component/Main_Nabar";
import Footer from "./Component/Footer";
import Plant_Garden from "./Pages/Plant_Garden";
import Home_page from "./Pages/Home_page";
import Style_One from "./Pages/Style_One";
import Style_Four from "./Pages/Style_Four";
import Grid_Style from "./Pages/Grid_Style";
import Col_Sidebar from "./Pages/Col_SideBar";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Blog_Three from "./Pages/Blog_Three";
import Contact_Two from "./Pages/Contact_Two";
import Shop_Now from "./Pages/Shop_Now";
import Carousal from "./Pages/Carousal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Style_Two from "./Pages/Style_Two";
import Style_Three from "./Pages/Style_Three";
import Deafult from "./Pages/Deafult";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Main_Navbar />
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/" element={<Plant_Garden />} />
          <Route path="styleOne" element={<Style_One />} />
          <Route path="styleTwo" element={<Style_Two />} />
          <Route path="styleThree" element={<Style_Three />} />
          <Route path="styleFour" element={<Style_Four />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="blog_three" element={<Blog_Three />} />
          <Route path="/Blog" element={<Deafult />}></Route>
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="contact_Two" element={<Contact_Two />} />

          <Route path="shop_now" element={<Shop_Now />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="col_Sidebar" element={<Col_Sidebar />} />
          <Route path="carousal" element={<Carousal />} />
          <Route path="gridStyle" element={<Grid_Style />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
