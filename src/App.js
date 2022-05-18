import Home from './components/pages/Home/Home';
import './App.css';
import Login from './components/pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import NotFound from './components/pages/NotFound.js/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
