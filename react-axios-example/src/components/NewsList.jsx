import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import styles from "./NewsList.module.css"; // Import CSS module

const NewsList = () => {
  // Define state using useState hook
  const [newss, setNews] = useState([]);

  // useEffect hook to mimic componentDidMount
  // get the all news from news source and also pull the news from feedback database and filter the news which
  // didn't have feedback
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/news/`).then((res) => {
      setNews(res.data); // Update state with fetched data
    });
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div className={styles.newsGrid}>
      {newss.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          news_url={news.news_url}
          published_date={news.publication_date}
          source_name={news.source_name}
          content={news.content}
        />
      ))}
    </div>
  );
};

export default NewsList;
