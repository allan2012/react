// import logo from './logo.svg';
import Dashboard from "./pages/Dashboard";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import FileUpload from "./pages/FileUpload";
import Forms from "./pages/Forms";
import Charts from "./pages/Charts";
import React from 'react';
import Alerts from "./pages/Alerts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}  />
      <Route path="/forms" element={<Forms />}  />
      <Route path="/file-upload" element={<FileUpload />}  />
      <Route path="/charts" element={<Charts />}  />
      <Route path="/alerts" element={<Alerts />}  />
    </Routes>
  );
}

export default App;
