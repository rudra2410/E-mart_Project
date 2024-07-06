import React from 'react'
import Shop_by_Categories from '../Component/Shop_by_Categories'
import Header_Part from '../Component/Header_Part'
import Interior_Plant from '../Component/Interior_Plant'
import Service from '../Component/Service'
import Gardening_Tools from '../Component/Gardening_Tools'
import New_arrivals from '../Component/New_arrivals'

const Home_page = () => {
  return (
    <div>
    <Header_Part/>
    <Shop_by_Categories/>
    <Interior_Plant/>
    <Service/>
    <Gardening_Tools/>
    <New_arrivals/>
    </div>
  )
}

export default Home_page
