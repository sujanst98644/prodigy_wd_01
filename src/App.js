import React, { useEffect, useState } from "react";

function App() {
  const [Scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      const isScrolled=window.scrollY>40
      if(isScrolled!==Scrolled){
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[Scrolled])
  return (
    <main className="flex flex-col font-sora text-white bg-[#EEF7FF]">
        <header className={`grid lg:grid-cols-3 items-center bg-green-700  pl-8 transition-colors duration-300 ${
          Scrolled ? "bg-white text-black" : ""} fixed top-0 left-0 w-full`}>
          <div className="flex flex-row items-center">
            <img src="Burger.png" alt="logo" className="h-14" />
            <p className="font-bold hover:scale-110">Chrunchy</p>
          </div>
          <div className="font-sora col-start-3 justify-end">
            <ul className="flex flex-row space-x-10 ">
              <a href="#Home" className="hover:underline hover:text-orange-200">Menu</a>
              <a href="#blogs" className="hover:underline hover:text-orange-200">Order</a>
              <a href="#pages" className="hover:underline hover:text-orange-200">Packs</a>
              <a href="#services" className="hover:underline hover:text-orange-200">services</a>
            </ul>
          </div>
        </header>
      <div className=" h-full font-semibold grid grid-cols-4 grid-rows-3 gap-4 mx-5 mt-16">
          {/* <div className="shadow-xl rounded-xl h-72 bg-cover"
            style={{ backgroundImage: "url('Momo.jpg')" }} >
          <p className="text-white text-3xl m-3">Momo</p>
          </div> */}
      <img src="Momo.jpg" alt="quisines" className="shadow-xl rounded-xl"/>
      <img src="Thukpa.jpg" alt="quisines" className="shadow-xl rounded-xl" />
      <img src="iron.jpg" alt="quisines" className=" col-span-2 row-span-2 shadow-xl rounded-xl" />
      <img src="Sekuwa.jpg" alt="quisines" className=" shadow-xl rounded-xl" />
      <img src="Thakali.jpg" alt="quisines" className=" shadow-xl rounded-xl" /> 
      <img src="Samai.jpg" alt="quisines" className="shadow-xl rounded-xl col-span-1" />
      <img src="background.jpg" alt="quisines" className="shadow-xl rounded-xl col-span-2" />
      </div>
    </main>
  );
}

export default App;
