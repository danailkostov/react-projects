import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const url = "https://opentdb.com/api.php?";

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(21);
  const [difficulty, setDifficulty] = useState("easy");
  const [questions, setQuestions] = useState(null);
  const [integer, setInteger] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [percent, setPercent] = useState(0);
  const [count, setCount] = useState(0);

  const fetchQuestions = async () => {
    setIsLoading(true);
    const response = await fetch(
      `${url}amount=${amount}&category=${category}&difficulty=${difficulty}`
    );
    const data = await response.json();
    setQuestions(data.results);
    setIsLoading(false);
  };
  return (
    <AppContext.Provider
      value={{
        setAmount,
        setCategory,
        setDifficulty,
        questions,
        category,
        difficulty,
        amount,
        fetchQuestions,
        isLoading,
        integer,
        setInteger,
        isModalOpen,
        setIsModalOpen,
        setPercent,
        percent,
        count,
        setCount,
        setQuestions,
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
