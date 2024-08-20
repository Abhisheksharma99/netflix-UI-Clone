import React, { createContext, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PreviousLocationContext = createContext(null);

export const PreviousLocationProvider = ({ children }) => {
  const location = useLocation();
  const prevLocationRef = useRef(null);

  useEffect(() => {
    prevLocationRef.current = location;
  }, [location]);

  return (
    <PreviousLocationContext.Provider value={prevLocationRef.current}>
      {children}
    </PreviousLocationContext.Provider>
  );
};

export const usePreviousLocation = () => useContext(PreviousLocationContext);
