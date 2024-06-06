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
    <main className="flex flex-col font-playfair">
        <header className={`grid lg:grid-cols-3 items-center bg-green-700 text-white pl-8 transition-colors duration-300 ${
          Scrolled ? "bg-white text-black" : "bg-green-700 text-white"} fixed top-0 left-0 w-full`}>
          <div>
            <img src="logo192.png" alt="Logo" className=" h-14" />
          </div>
          <div className="font-sora col-start-3 justify-end">
            <ul className="flex flex-row space-x-4 ">
              <a href="#Home">Menu</a>
              <a href="#blogs">Order</a>
              <a href="#pages">Packs</a>
              <a href="#services">services</a>
            </ul>
          </div>
        </header>
      <div className=" h-screen bg-[#EEF7FF] font-semibold text-9xl">
        
      </div>
    </main>
  );
}

export default App;
