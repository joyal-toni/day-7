import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VoteProvider } from "./votecontext";   // ✅ lowercase filename
import VotingPage from "./votingpage";          // ✅ lowercase filename
import ResultsPage from "./resultpage";         // ✅ lowercase filename

function App() {
  return (
    <VoteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<VotingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </VoteProvider>
  );
}

export default App;




