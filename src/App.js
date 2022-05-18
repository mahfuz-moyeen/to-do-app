import Home from './components/pages/Home/Home';
import './App.css';
import Login from './components/pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import NotFound from './components/pages/NotFound.js/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
