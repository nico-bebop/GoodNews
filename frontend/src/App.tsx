import { Route, Routes } from "react-router-dom";
import { LatestNews } from "./components/LatestNews";
import { SearchNews } from "./components/SearchNews";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LatestNews />} />
        <Route path="/search" element={<SearchNews />} />
      </Routes>
    </>
  );
}

export default App
