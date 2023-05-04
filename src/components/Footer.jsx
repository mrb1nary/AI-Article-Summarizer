import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="absolute bottom-5 w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg text-gray-700">
          Made with 💖 and 🍵 by{" "}
          <span>
            <a
              href="https://github.com/mrb1nary"
              target="_blank"
              rel="noreferrer"
            >
              mrb1nary
            </a>
          </span>
        </p>
        <div className="relative mt-5">
          <AiFillGithub className="absolute left-0 mr-5 w-10 h-5 my-2.5 pl-4 text-white" />
          <button
            className="bg-black text-white w-[130px] h-10 pl-3 rounded-2xl "
            onClick={() => {
              window.open("https://github.com/mrb1nary");
            }}
          >
            Github
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
