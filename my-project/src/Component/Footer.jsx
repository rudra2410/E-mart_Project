import React from 'react';
import visa from "../assets/Visa.svg"

const Footer = () => {
  return (
    <footer className="bg-[#f6f6f6] text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4 text-[#2c2a2a]">Quick Link</h5>
            <ul className='text-[#666666] leading-8'>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Product</a></li>
              <li><a href="#" className="hover:underline">Responsibility</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Image Bank</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4 text-[#2c2a2a]">Customer Service</h5>
            <ul  className='text-[#666666] leading-8'>
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Checkout Page</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Terms & Condition</a></li>
              <li><a href="#" className="hover:underline">Deliveries & Refunds</a></li>
              <li><a href="#" className="hover:underline">Cart Page</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4 text-[#2c2a2a]">More</h5>
            <ul  className='text-[#666666] leading-8'>
              <li><a href="#" className="hover:underline">Gift Card</a></li>
              <li><a href="#" className="hover:underline">Lookbook</a></li>
              <li><a href="#" className="hover:underline">Rewards Program</a></li>
              <li><a href="#" className="hover:underline">Wedding Dress</a></li>
              <li><a href="#" className="hover:underline">Host A Party</a></li>
              <li><a href="#" className="hover:underline">Extended Sizing</a></li>
            </ul>
          </div>
          <div className='-ml-20'>
            <h5 className="text-lg font-semibold mb-4 text-[#2c2a2a]">Don't Miss Any Update</h5>
            <p className="text-sm mb-4 text-[#666666]">Molestie vitae massa felis, aliquam lectus at. Ultricies et, quis sit fermentum aliquam et.</p>
            <form>
              <div className="flex border border-black">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-full border border-gray-300 focus:outline-none"
                />
                <button type="submit" className="px-4 py-2 bg-black text-white">&gt;</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={visa} />
          </div>
          <p className="text-sm text-[#666666]">Designed by: Rudra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
