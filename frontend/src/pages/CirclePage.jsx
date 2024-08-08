import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from './PostForm';
import CommentForm from './CommentForm';
import 'tailwindcss/tailwind.css';
function CirclePage() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch(`/api/circles/${id}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data.data));

    fetch(`/api/circles/${id}/activity`)
      .then(response => response.json())
      .then(data => setActivity(data.data));
  }, [id]);

  return (
    <div>
      <h1>Circle Posts</h1>
      <PostForm circleId={id} />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentForm postId={post.id} />
            <ul>
              {post.comments.map(comment => (
                <li key={comment.id}>{comment.content}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2>Circle Activity</h2>
      <ul>
        {activity.map(({ user, activity }) => (
          <li key={user.id}>
            {user.name}: {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CirclePage;