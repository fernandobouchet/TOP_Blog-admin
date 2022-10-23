import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <>
      {admin && <Header />}
      <Routes>
        {!admin ? (
          <Route path="/" element={<Login setAdmin={setAdmin} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </>
        )}
      </Routes>
      {admin && <Footer />}
    </>
  );
}

export default App;
