import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Publicaciones} from "./components/Home";
import Navbar from "./components/navBar";
import {Login} from "./components/Login";
function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Publicaciones/>}/>
                <Route path="/Publicaciones" element={<Publicaciones/>}/>
                <Route path="/Login" element={<Login/>}/>

            </Routes>
        </BrowserRouter>

    )
}

export default App;
