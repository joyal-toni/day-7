import React, { createContext, useContext, useState } from "react";

// Create context
const VoteContext = createContext();

// Provider component
export function VoteProvider({ children }) {
  const [votes, setVotes] = useState({ optionA: 0, optionB: 0 });

  // Function to add vote
  const addVote = (option) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <VoteContext.Provider value={{ votes, addVote }}>
      {children}
    </VoteContext.Provider>
  );
}

// Custom hook
export function useVotes() {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVotes must be used inside a VoteProvider");
  }
  return context;
}




