// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      //adaptable mobile menu
      let screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    });
  }, []);

  return (
    <div className="container">
      <header className="bg-[#ffffff30] w-screen">
        <nav className="flex items-center justify-between px-12 h-17 lg:gap-8">
          <a href="" className="font-bold border-2 px-2 py-1 whitespace-nowrap">
            Tailwind Anytime
          </a>
          <div
            className={
              "absolute top-10 left-0 w-screen max-lg:bg-[#0e0e0e] lg:lg:bg-none flex flex-col gap-6 items-center py-2 text-lg font-bold lg:static lg:flex-row lg:justify-between" +
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
      <div>
        <h1 className="text-center p-2">Grid system</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 my-2 w-screen">
        <div className="bg-red-500 max-sm:w-screen text-white h-full col-span-2 row-span-2 p-2">
          <p>This is the first grid item spanned</p>
        </div>
        <div className="bg-blue-500 text-white h-24 p-2">
          <p>This is the second grid item</p>
        </div>
        <div className="bg-yellow-500 text-white h-24 p-2">
          <p>This is the third grid item</p>
        </div>
        <div className="bg-purple-500 text-white h-24 p-2">
          <p>This is the fourth grid item</p>
        </div>
      </div>

      <div>
        <h1 className="text-center p-2">Flex Box Row</h1>
      </div>
      <div className="flex flex-wrap w-screen">
        <div className="bg-red-500 w-full sm:w-1/2">
          {" "}
          <p className="p-2">Red</p>{" "}
        </div>
        <div className="bg-green-500 w-1/2">
          {" "}
          <p className="p-2">Green</p>{" "}
        </div>
        <div className="bg-purple-500 w-1/2">
          {" "}
          <p className="p-2">Red</p>{" "}
        </div>
        <div className="bg-yellow-500 w-1/2">
          {" "}
          <p className="p-2">Green</p>{" "}
        </div>
      </div>
      <div>
        <h1 className="text-center p-2">Flex Box Column</h1>
      </div>
      <div className="flex flex-col flex-wrap w-full justify-center align-center">
        <div className="bg-red-500 w-1/2">
          {" "}
          <p className="p-2">Red</p>{" "}
        </div>
        <div className="bg-green-500 w-1/2">
          {" "}
          <p className="p-2">Green</p>{" "}
        </div>
        <div className="bg-purple-500 w-1/2">
          {" "}
          <p className="p-2">Red</p>{" "}
        </div>
        <div className="bg-yellow-500 w-1/2">
          {" "}
          <p className="p-2">Green</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
