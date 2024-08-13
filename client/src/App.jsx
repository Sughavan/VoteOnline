import { Route, Routes, BrowserRouter } from "react-router-dom";
import Land from "./Land/Land";
import "./App.css";
import Details from "./Detail/Details";
import Login from "./Login/Login";
import Vote from "./Votee/Vote";
import Votesucc from "./new folder/votesucc";
import Candidates from "./Election/Candidates";
import Election from "./Election/Election";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Election" element={<Election />} />
        <Route path="/Cand" element={<Candidates />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Vote" element={<Vote />} />
        <Route path="/votesucc" element={<Votesucc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
