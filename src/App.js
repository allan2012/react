// import logo from './logo.svg';
import Dashboard from "./pages/Dashboard";
import {Routes, Route, Form} from "react-router-dom";
import Login from "./pages/Login";
import FileUpload from "./pages/FileUpload";
import Forms from "./pages/Forms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}  />
      <Route path="/forms" element={<Forms />}  />
      <Route path="/file-upload" element={<FileUpload />}  />
    </Routes>
  );
}

export default App;
