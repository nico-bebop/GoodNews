import { Route, Routes, useLocation } from "react-router-dom";
import { LatestNews } from "./components/LatestNews";
import { SearchNews } from "./components/SearchNews";
import './App.css'
import { Button } from "@mui/material";

function App() {

  const location = useLocation();

  return (
    <>
      <Button href="/" disabled={location.pathname == "/" ? true : false} >Ultimas Noticias</Button>
      <Button href="search" disabled={location.pathname == "/search" ? true : false}>Buscador</Button>
      <Routes>
        <Route path="/" element={<LatestNews />} />
        <Route path="search" element={<SearchNews />} />
      </Routes>
    </>
  );
}

export default App
