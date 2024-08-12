import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function MainPage() {
  const [circles, setCircles] = useState([]);
  const navigate = useNavigate();
  const [circleName, setCircleName] = useState('');
  useEffect(() => {
    axios.get('http://127.0.0.1:7001/circle/GetAllCircles')
      .then(response => {
        console.log('response.data: ', response.data);
        setCircles(response.data);
        console.log('circles: ', circles);
      })
      .catch(error => {
        console.error('There is error in fetching circles:', error);
      });
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (circleName) {
      const circleData = { name: circleName };
      axios.post('http://127.0.0.1:7001/circle/CreateCircle', circleData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Create New Circle:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      // setCircleName('');
      window.location.reload();
    }
  };

  const enterCircle = (id) => {
    console.log('用户进入兴趣圈:', id);
    navigate(`/Circle/${id}`);
  };

  return (
    <div>
      <h1 style={{ color: 'white', fontSize: '60px', marginTop: '-320px' }}>兴趣圈列表</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          style={{ width: '200px', height: '32px' }}
          value={circleName}
          onChange={(e) => setCircleName(e.target.value)}
          placeholder="兴趣圈名称"
        />
        <button type="submit" onClick={handleSubmit} style={{ width: '150px', height: '35px', marginTop: '15px', marginLeft: '10px' }}> 创建新兴趣圈 </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        {circles.map(circle => (
          <div key={circle.id}>
            <h2 style={{ color: 'white', fontSize: '24px' }}>{circle.name}</h2>
            <button onClick={() => enterCircle(circle.id)}>进入</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;