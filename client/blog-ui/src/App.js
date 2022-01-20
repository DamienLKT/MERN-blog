import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/home/Hompage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Topbar/>
    <Homepage />
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
