import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const BaseUrl = "https://google-search3.p.rapidapi.com/api/v1";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (type) => {
    setLoading(true);
    const response = await fetch(`${BaseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "160c349ffemsh8dc39b7dd3f224ap110f5fjsn21339aa2c434",
      },
    });
    const data = await response.json();

    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useContextResult = () => useContext(ResultContext);
