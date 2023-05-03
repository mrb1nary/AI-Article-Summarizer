function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <h2 className="mt-9 text-5xl font-extrabold leading-3 text-black sm:text-5xl text-center bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text sm:text-transparent">
        Articulator
      </h2>
      <nav className="flex justify-between items-center w-full mb-10 pt-5">
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
      <h1 className="mt-4 text-3xl font-extrabold leading-3 text-black sm:text-3xl text-center">
        Summarize Article with <br className="max-md:hidden" />
        <span className="block bg-gradient-to-r from-amber-400 via-orange-700 to-yellow-400 bg-clip-text sm:text-transparent mt-5">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="text-gray-600 max-w-2xl text-center mt-5 sm:w-[80%]">
        Open-source article summarizer that uses an API based on OpenAI's GPT-4
        model. Please note that the application uses a free version of the API
        which has a limit of 50 requests per month. If the app isn't working
        then the limit must have been exhausted.
      </h2>
    </header>
  );
}

export default Hero;
