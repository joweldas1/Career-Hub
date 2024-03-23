const HeroBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#ffffff] text-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="./user.png" className="max-w-lg  rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-7xl font-bold">
              One Step <br /> Closer To Your <br />
              <span className="text-7xl bg-300% font-bold bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                Dream Job
              </span>{" "}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
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
    </div>
  );
};

export default HeroBanner;
