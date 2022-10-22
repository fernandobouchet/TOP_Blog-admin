import axios from 'axios';

const API_URL = 'https://blogapi.fly.dev';

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

const postService = {
  getPosts,
};

export default postService;
