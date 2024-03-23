import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const local=localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',local)
  },[theme])

  const handleTheme=e=>{
    if(e.target.checked){
      setTheme('light')
    }else{
      setTheme("dark")
    }
  }

  const nav = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/jobs"> Jobs </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/applied">Applied Jobs</NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink to="/statistics"> Statistics</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/blogs"> Blogs</NavLink>{" "}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Career Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
        <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller mr-3"/>
          <button>
            <a
              href="#_"
              class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-300 rounded hover:bg-purple group"
            >
              <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Get Started
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
