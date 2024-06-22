import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ news }) => {
  const maxDesc = 100;
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4 transition-transform transform hover:scale-105">
      {news.urlToImage && (
        <img
          className="w-full h-48 object-cover"
          src={news.urlToImage}
          alt={news.title}
        />
      )}
      <div className="p-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{news.title}</div>
        <p className="text-gray-700 text-base">
          {news.description && news.description.length > maxDesc
            ? news.description.substring(0, maxDesc) + "..."
            : news.description}
        </p>
      </div>
      <div className="p-4 pt-2">
        <Link
          to={`/news/${encodeURIComponent(news.url)}`}
          className="text-blue-500 hover:text-blue-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Cards;
