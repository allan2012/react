// import logo from './logo.svg';
import Dashboard from "./pages/Dashboard";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import FileUpload from "./pages/FileUpload";
import Forms from "./pages/Forms";
import Charts from "./pages/Charts";
import React from 'react';
import Alerts from "./pages/Alerts";
import Search from "./pages/Search";
import {isAuthenticated} from "./api/Auth"
import PageNotFound from "./pages/PageNotFound";
import Modals from "./pages/Modals";
import Options from "./pages/Options";
import MemberForm from "./pages/MemberForm";

function App() {

    if (isAuthenticated === false) {
      return <Login />
    }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Dashboard />}  />
      <Route path="/forms" element={<Forms />}  />
      <Route path="/file-upload" element={<FileUpload />}  />
      <Route path="/charts" element={<Charts />}  />
      <Route path="/alerts" element={<Alerts />}  />
      <Route path="/modals" element={<Modals />}  />
      <Route path="/search" element={<Search />}  />
      <Route path="/member/:id" element={<MemberForm />}  />
      <Route path="/options" element={<Options />}  />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
