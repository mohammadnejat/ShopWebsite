import React from "react";
import Header from "../../Component/Header/Header";
import SellCards from "../../Component/SellCards/SellCards";
import Cards from "../../Component/Cards/Cards";
import HomeImageSwiper from "../../Component/HomeImageSwiper/HomeImageSwiper";
import BrandImage from "../../../src/images/mostSelled/Title.png"
import ImageSection from "../../../src/images/10.png"
import Footer from "../../Component/Footer/Footer";
import TopButton from "../../Component/TopButton/TopButton";
import "./Home.css"
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { supabase } from "../../supabase";



const Home = () => {



  const user = useUser()
  const supabase = useSupabaseClient();
  console.log(user);

  return (

    <>
    <Header />
    <HomeImageSwiper />
    <div className="mostSelled">
      <div className="mostSelled-section">
        <div className="mostSelledBrand">
          <img src={BrandImage} alt="#" />
          <hr />
        </div>
        <div className="mostSelledItems">
          <Cards />
        </div>
      </div>
    </div>

    <div className="border HomeMiddleSectionImage bg-sky-600">
      <div className="ImageRight">
        <h2 style={{ textAlign: "center", color: "black", fontSize: "42px", fontWeight: "800" }}>خرید لوازم گیمینگ</h2>
        <h5 style={{ textAlign: "center", marginTop: "3rem",color: "white", fontSize: "20px", fontWeight: "800" }}>بهترین لوازم گیمینگ,کیبورد,موس و هدفون و ...</h5>
        <h1 style={{ textAlign: "center", marginTop: "2rem", color: "white", fontSize: "20px", fontWeight: "800" }}>با ما بهترین بازیکن باش</h1>
      </div>

      <div className="hover02 column ">
        <figure><img src={ImageSection} alt="img" /></figure>
      </div>
    </div>

    <div className="sellItmesMenu">
      <h1 style={{ fontWeight: "800" }} className='mr-10 text-4xl'>کالاهای دیجیتال</h1>
      <div className="sellItemsList">
        <SellCards />
      </div>
    </div>
    <TopButton/>
    <Footer/>
    </>
      
  )
}

export default Home