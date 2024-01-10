import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Register from "./components/Register";
import Signup from './components/Signup'
import Signupplan from "./components/Signupplan";
import Login from "./components/Login";
import Main from "./components/Main"
import Moviepage from "./components/Moviepage";
import Moviestate from "./contextapi/Moviestate";
import Showspage from "./components/Showspage";
import Mylist from "./components/Mylist";

function App() {
  return (
    <>
      <Moviestate>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Register />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signup/planform' element={<Signupplan />} />
            <Route path='/login' element={<Login />} />
            <Route path='/main' element={<Main />} />
            <Route path='/page' element={<Moviepage />} />
            <Route path='/shows' element={<Showspage />} />
            <Route path='/mylist' element={<Mylist />} />
          </Routes>
        </BrowserRouter>

      </Moviestate>

    </>
  );
}

export default App;
