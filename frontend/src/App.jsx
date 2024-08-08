import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CirclePage from './pages/CirclePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/circle/:id" element={<CirclePage />} />
        {/* 其他页面的路由 */}
      </Routes>
    </Router>
  );
}

export default App
