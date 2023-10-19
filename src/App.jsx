import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Startups from './pages/Startups';
import Resources from './pages/Resources';
import Schemes from './pages/Schemes';
import Header from "./components/Header";
export default function App() {
  return <BrowserRouter>
   <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/Startups" element={<Startups/>} />
    <Route path="/Schemes" element={<Schemes/>} />
    <Route path="/Resources" element={<Resources/>} />
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>;
}