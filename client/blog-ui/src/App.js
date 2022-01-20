import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/home/Homepage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import Createpostpage from "./pages/createPost/Createpostpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/single/Single";

function App() {
  const currentUser = true;
  return (    
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/write" element={<Createpostpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
