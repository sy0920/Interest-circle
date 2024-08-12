import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CirclePage from './pages/CirclePage';
import PostForm from './pages/PostForm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/circle/:circleId" element={<CirclePage />} />
        <Route path="/PostForm/:circleId" element={<PostForm />} />
      </Routes>
    </Router>
  );
}

export default App
