import './App.css';
import Topbar from "./components/topbar/topbar"
import Home from './pages/home/home';
import Single from "./pages/single/single"
import Write from './pages/write/write';
import Settings from './pages/settings/settings'
import Login from './pages/login/login';
import Register from './pages/register/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const currentUser=false;
  return (
    <Router>
<Topbar />
<Routes>
{/* <Single/> */}
<Route path="/" element={<Home/>}></Route>
       <Route path="/register" element= {currentUser ? <Home /> : <Register />}></Route>
        <Route path="/login" element={currentUser ? <Home /> : <Login />}></Route>
        <Route path="/post/:id" element={<Single/>}></Route>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}></Route>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}></Route>
 </Routes>
{/* <Home /> */}

{/* <Write/> */}
{/* <Settings/> */}
{/* <Login /> */}
{/* <Register /> */}
</Router>
  );
}
export default App;
