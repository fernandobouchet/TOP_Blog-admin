import { useEffect, useState } from 'react';
import postService from './features/postService';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [admin, setAdmin] = useState();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return <>{!admin ? <Login /> : <Home posts={posts} />}</>;
}

export default App;
