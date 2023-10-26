// import logo from './logo.svg';
import Dashboard from "./pages/Dashboard";
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import FileUpload from "./pages/FileUpload";
import Forms from "./pages/Forms";
import Charts from "./pages/Charts";
import React from 'react';
import Alerts from "./pages/Alerts";
import Search from "./pages/Search";
import {isAuthenticated} from "./api/Auth";

function App() {

  const navigate = useNavigate()
    if (isAuthenticated === false) {
      return <Login />
    }


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}  />
      <Route path="/forms" element={<Forms />}  />
      <Route path="/file-upload" element={<FileUpload />}  />
      <Route path="/charts" element={<Charts />}  />
      <Route path="/alerts" element={<Alerts />}  />
      <Route path="/search" element={<Search />}  />
    </Routes>
  );
}

export default App;
