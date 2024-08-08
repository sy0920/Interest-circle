import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // 初始化 useNavigate
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Username and password cannot be empty');
      return;
    }
    else {
      navigate('/home'); // 跳转到主页
    }
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div className="box">
      <h2>用户登录</h2>
      <form onSubmit={handleLogin}>
        <div className="input-box">
          <label htmlFor="username">账号</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btn-box">
          <a href="#">忘记密码?</a>
          <div>
            <button type="submit">登录</button>
            <button type="button">注册</button>
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;