import { Route, Routes, BrowserRouter } from "react-router-dom";
import Land from "./Land/Land";
import "./App.css";
import Details from "./Detail/Details";
import Login from "./Login/Login";
import Vote from "./Votee/Vote";
import Votesucc from "./new folder/votesucc";
import Candidates from "./Election/Candidates";
import Election from "./Election/Election";
import AdminLogin from "./Admin/AdminLogin";
import AdminPage from "./Admin/AdminPage";
import VoteResult from "./VoteResult/VoteResult";
import ThankYou from "./ThankYou/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Election" element={<Election />} />
        <Route path="/Result" element={<AdminLogin/>} />
        <Route path="/admin" element={<VoteResult/>} />
        <Route path="/Cand" element={<Candidates />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Vote" element={<Vote />} />
        <Route path="/Thanks" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
