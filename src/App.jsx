import React from "react";
import "./App.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="container">
      <header className="bg-[#ffffff30] w-screen">
        <nav className="flex items-center justify-between px-12 h-17 lg:gap-8">
          <a href="" className="font-bold border-2 px-2 py-1 whitespace-nowrap">
            Tailwind Anytime
          </a>
          <div
            className={
              "absolute top-10 left-0 w-screen max-lg:bg-[#ffffff30] lg:lg:bg-none w-full flex flex-col gap-6 items-center py-2 text-lg font-bold lg:static lg:flex-row lg:justify-between" +
              " " +
              `${mobileMenu && "hidden"}`
            }
          >
            <ul className="flex flex-col gap-6 items-center lg:flex-row lg:justify-between">
              <li className="hover:text-orange-500">Home</li>
              <li className="hover:text-orange-500">Tailwind Css Tips</li>
              <li className="hover:text-orange-500">Videos</li>
              <li className="hover:text-orange-500">Blogs</li>
              <li className="hover:text-orange-500">Courses</li>
            </ul>
            <div className="flex flex-col gap-6 items-center lg:flex-row lg:justify-between">
              <button className="hover:text-orange-500">Login</button>
              <button className="bg-orange-500 rounded-lg px-2 py-1">
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <FaBars
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className="font-bold text-2xl lg:hidden"
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
