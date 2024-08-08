import { useState } from 'react';

function PostForm({ circleId }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    await fetch(`/api/circles/${circleId}/posts`, {
      method: 'POST',
      body: formData,
    });

    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;