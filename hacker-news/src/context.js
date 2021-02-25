import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const url = "https://hn.algolia.com/api/v1/search?query=";

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("REACT");
  const [articles, setArticles] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currPage, setCurrPage] = useState(0);
  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${searchValue}&page=${currPage}`);
    const data = await response.json();
    setArticles(data.hits);
    setNumPages(data.nbPages);
    setCurrPage(data.page);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currPage, searchValue]);

  const removeArticle = (id) => {
    const newArticles = articles.filter((article) => article.objectID !== id);
    return setArticles(newArticles);
  };

  const prevPage = () => {
    if (currPage === 0) {
      setCurrPage(numPages - 1);
    } else {
      setCurrPage((state) => state - 1);
    }
  };
  const nextPage = () => {
    if (numPages - currPage === 1) {
      setCurrPage(0);
    } else {
      setCurrPage((state) => state + 1);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toUpperCase());
    setCurrPage(0);
  };

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        isLoading,
        articles,
        setCurrPage,
        numPages,
        removeArticle,
        currPage,
        prevPage,
        nextPage,
        handleSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
