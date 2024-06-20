import  { useEffect, useState } from 'react'
import axios from "axios";

const API_KEY = "bf50047419ed4a36be56efc5997344bd";

const useFetchNews = (category,page) => {
    const [news,setNews]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchNews=async()=>{
            setLoading(true);
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines`,{
                    params:{
                        apiKey:API_KEY,
                        category,
                        page,
                        pageSize:10
                    }
                }
                );
                console.log(response.data);
                setNews(response.data);
            } catch (error) {
                setError(error);
            } finally{
                setLoading(false);
            }
        }
        fetchNews();
    },[category,page]);


  return {news,loading,error}
}

export default useFetchNews