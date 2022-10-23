import axios from 'axios';

const API_URL = 'https://blogapi.fly.dev';

const user = JSON.parse(localStorage.getItem('user'));

const config = {
  headers: {
    Authorization: `Bearer ${user}`,
  },
};

const getPosts = async () => {
  try {
    const result = await axios.get(`${API_URL}/post`);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (id) => {
  try {
    const result = await axios.get(`${API_URL}/post/${id}`);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (id, data) => {
  try {
    const result = await axios.put(`${API_URL}/post/${id}`, data, config);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};

const postService = {
  getPosts,
  getPostById,
  editPost,
};

export default postService;
