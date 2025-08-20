import React from "react";
import { useVotes } from "./votecontext";

export default function ResultPage() {
  const { votes } = useVotes();

  return (
    <div>
      <h2>Results</h2>
      <p>Option A: {votes.optionA}</p>
      <p>Option B: {votes.optionB}</p>
    </div>
  );
}
