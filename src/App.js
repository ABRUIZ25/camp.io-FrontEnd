import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreateUserPage from "./Pages/CreateUserPage";
import Admin from "./Pages/Admin";
import './App.css';
import { Routes, Route } from "react-router-dom";


function App() {
  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/createpage" element={<CreateUserPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>


      </header>
    </div>
  )
}

export default App;
