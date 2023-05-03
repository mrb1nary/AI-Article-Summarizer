import { AiOutlineLink } from "react-icons/ai";

function Demo() {
  return (
    <div className="mt-10 max-w-xl w-full text-center m-auto flex items-center justify-center">
      {/* {Search} */}
      <div className="flex flex-col w-full gap-2 ">
        <form
          className=" relative flex justify-center items-center w-full"
          onSubmit={() => {}}
        >
          <AiOutlineLink className="absolute left-0 ml-3 w-4 my-3" />
          <input
            type="url"
            placeholder="Enter URL of an article"
            value=""
            onChange={() => {}}
            required
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Demo;
