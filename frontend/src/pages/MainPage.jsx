import React from 'react';
import { useNavigate } from 'react-router-dom';


function MainPage() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="main-page">
            <h1>欢迎来到兴趣圈</h1>
            <div className="button-container">
                <button onClick={handleLoginClick}>登录</button>
                <button onClick={handleRegisterClick}>注册</button>
            </div>
        </div>
    );
}

export default MainPage;