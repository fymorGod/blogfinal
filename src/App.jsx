import { useState } from 'react';
import './styles.scss';
import './media-query.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { About } from "./pages/About";
import { AddEditBlog } from "./pages/AddEditBlog";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Header } from './components/Header';
import { Auth } from './pages/Login';
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Header setActive={setActive} active={active} />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home setActive={setActive}/>} />
        <Route path="/detail/:id" element={<Details setActive={setActive} />} />
        <Route path="/create" element={<ProtectedRoute><AddEditBlog/></ProtectedRoute>}/>
        <Route path="/update/:id" element={<ProtectedRoute><AddEditBlog/></ProtectedRoute>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/auth" element={<Auth setActive={setActive}/>}/>
        <Route path="+" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
