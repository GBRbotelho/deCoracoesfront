import Loading from "../components/Loading";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LoadingContext = createContext({
  onLoading: () => {},
  offLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const onLoading = () => {
    setLoading(true);
  };

  const offLoading = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ onLoading, offLoading }}>
      {children}
      {loading && <Loading />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
