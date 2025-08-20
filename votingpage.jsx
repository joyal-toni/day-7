import React from "react";
import { useVotes } from "./votecontext";

export default function VotingPage() {
  const { addVote } = useVotes();

  return (
    <div>
      <h2>Cast Your Vote</h2>
      <button onClick={() => addVote("optionA")}>Vote for A</button>
      <button onClick={() => addVote("optionB")}>Vote for B</button>
    </div>
  );
}
