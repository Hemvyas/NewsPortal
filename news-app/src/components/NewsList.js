import React from 'react'
import Cards from './Cards'

const NewsList = ({news}) => {
    return (
      <div className="flex flex-wrap justify-center">
        {news && news.map((news) => <Cards key={news.url} news={news} />)}
      </div>
    );
}

export default NewsList