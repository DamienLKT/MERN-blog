import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/home/Homepage";
import LoginPage from "./pages/login/LoginPage";
import Createpostpage from "./pages/createPost/Createpostpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const currentUser = true;
  return (    
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/write" element={<Createpostpage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
