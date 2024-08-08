import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [circles, setCircles] = useState([]);
  const navigate = useNavigate();

  const [circleName, setCircleName] = useState('');

  const handleCreateCircle = async (e) => {
    e.preventDefault();
    await fetch('/api/circles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: circleName }),
    });
    setCircleName('');
    // Optionally, refresh the list of circles
  };
  useEffect(() => {
    fetch('/api/circles')
      .then(response => response.json())
      .then(data => setCircles(data.data));
  }, []);

  const joinCircle = (id) => {
    fetch(`/api/circles/${id}/join`, { method: 'POST' })
      .then(response => response.json())
      .then(() => navigate(`/circle/${id}`));
  };

  return (
    <div>
      <h1 style={{ color: 'white' }}>Interest Circles</h1>
      <div>
        <h1>Create a New Circle</h1>
        <form onSubmit={handleCreateCircle}>
          <input
            type="text"
            value={circleName}
            onChange={(e) => setCircleName(e.target.value)}
            placeholder="Enter circle name"
            required
          />
          <button type="submit">Create</button>
        </form>
        {/* Add a list to display existing circles */}
      </div>
      <ul>
        {circles.map(circle => (
          <li key={circle.id}>
            {circle.title}
            <button onClick={() => joinCircle(circle.id)}>Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;