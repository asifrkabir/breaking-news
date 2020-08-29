import React, { useEffect, useState } from 'react';
import News from '../News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a63e8d3667149988e0c53d08ef57baa";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setArticles(data.articles);
        })
    }, [])

    return (
        <div>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;