import { createContext, useState } from "react";

const newsContext = createContext([]);
export const NewsProvider = ({ children, news }) => {
  const [currentNews, setCurrentNews] = useState(news || []);

  const setNews = (value) => {
    setCurrentNews(value);
  };

  return (
    <newsContext.Provider
      value={{
        news: currentNews,
        setNews: setNews,
      }}
    >
      {children}
    </newsContext.Provider>
  );
};

export const newsConsumer = newsContext.Consumer;

export default newsContext;
