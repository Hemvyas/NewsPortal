import React, { useState } from "react";
import useFetchNews from "../hooks/useFetchNews";
import NewsList from "../components/NewsList";
import Navbar from "../components/Navbar";
import { TailSpin } from "react-loader-spinner";


const Home = () => {
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1); 
  };


  const pageSize = 9; 

  const { news, loading, error, totalResults } = useFetchNews(
    category,
    pageSize,
    currentPage
  );
  const totalPages = Math.ceil(totalResults / pageSize);

  const next = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar category={category} handleCategoryChange={handleCategoryChange} />
      <div className="container mx-auto p-4 flex-grow">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : error ? (
          <p>Error fetching articles: {error.message}</p>
        ) : (
          <>
            <NewsList news={news} />
            {totalResults > pageSize && (
              <div className="flex justify-center mt-4">
                <button
                  className={`mx-2 px-4 py-2 rounded-lg border ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-700"
                      : "bg-gray-800 text-white hover:bg-gray-900"
                  }`}
                  onClick={prev}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className={`mx-2 px-4 py-2 rounded-lg border ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-700"
                      : "bg-gray-800 text-white hover:bg-gray-900"
                  }`}
                  onClick={next}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
