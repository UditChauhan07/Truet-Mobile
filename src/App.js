
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./component/Sign-up/Sign-up";
import Dashboard from "./component/Dashboard";
import Library from "./component/Library/Library";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="library" element={<Library />}></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
