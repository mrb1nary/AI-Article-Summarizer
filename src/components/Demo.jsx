import { AiOutlineLink } from "react-icons/ai";
import { useLazyGetSummaryQuery } from "../redux/articleSlice";
import { useState, useEffect } from "react";
import loader from "../assets/loader.svg";

function Demo() {
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articleHistory")
    );

    if (articlesFromLocalStorage) {
      setArticleHistory(articlesFromLocalStorage);
    }
  }, []);

  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [articleHistory, setArticleHistory] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const newArticleHistory = [...articleHistory, newArticle];

      setArticleHistory(newArticleHistory);
      setArticle(newArticle);

      localStorage.setItem("articleHistory", JSON.stringify(newArticleHistory));
    }
  }

  return (
    <div className="mt-10 max-w-xl w-full text-center m-auto flex-col items-center justify-center">
      {/* {Search} */}
      <div className="flex flex-col w-full gap-2 ">
        <form
          className="cursor-pointer z-10  relative flex justify-center items-center lg:w-full"
          onSubmit={handleSubmit}
        >
          <AiOutlineLink className="absolute left-0 ml-3 w-4 my-3" />
          <input
            type="url"
            placeholder="Enter URL of an article"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className="cursor-pointer block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
        {/* {Browser History} */}
        <div className="flex flex-col max-h-60 overflow-y-auto gap-1">
          {articleHistory.map((article, index) => (
            <div
              key={index}
              onClick={() => {
                setArticle(article);
              }}
              className="flex flex-col gap-1 p-2 border border-gray-200 rounded-md"
            >
              <p>{article.url}</p>
            </div>
          ))}
        </div>
      </div>
      {/* {Display Results} */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Something went wrong! Please try again{" "}
            <span className="text-gray-700">{error?.data?.error}</span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600 text-xl">
                Article{" "}
                <span className="bg-gradient-to-r from-green-200 via bg-green-400 to-green-500">
                  Summary
                </span>
              </h2>
              <div className="">
                <p className="font-medium text-sm text-gray-700">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Demo;
