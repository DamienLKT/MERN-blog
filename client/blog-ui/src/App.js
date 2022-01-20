import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/home/Hompage"
import LoginPage from "./pages/login/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {

  return (
    <>
    {/* <Topbar/>
    <Homepage /> */}
    <LoginPage/>
    </>
    // <Router>
    //   <Topbar />
    //   <Routes>
    //     <Route exact path ="/">
    //       <Homepage/>
    //     </Route>
    //   </Routes>
    // </Router>
    
  );
}

export default App;
