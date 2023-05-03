function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-5">
        <h2>Articulator</h2>
        {/* <button
          type="button"
          onClick={() => {
            window.open("https://github.com/mrb1nary");
          }}
          className=" w-20 text-white h-10 rounded-2xl bg-black"
        >
          Github
        </button> */}
      </nav>
      <h1 className="mt-4 text-4xl font-extrabold leading-3 text-black sm:text-5xl text-center">
        Summarize Article with <br />{" "}
        <span className="bg-gradient-to-r from-amber-400 via-orange-700 to-yellow-400 bg-clip-text text-transparent">
          OpenAI
        </span>
      </h1>
    </header>
  );
}

export default Hero;
