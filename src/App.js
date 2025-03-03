
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./component/Sign-up/Sign-up";
import Dashboard from "./component/Dashboard";
import Library from "./component/Library/Library";
import TruetAi from "./component/TruetAi/TruetAi";
import ChatScreen from "./component/ChatScreen/ChatScreen";
import Contactlist from "./component/ContactList/Contactlist";
import Onboarding from "./component/Onboarding/Onboarding";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Onboarding />}></Route> */}
          <Route path="/" element={<SignUp />}></Route>
          <Route path="home" element={<Dashboard />}></Route>
          <Route path="sales" element={<Library />}></Route>
          <Route path="truet-ai" element={<TruetAi />}></Route>
          <Route path="chat" element={<ChatScreen />}></Route>
          <Route path="Contactlist" element={<Contactlist />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
