import axios from 'axios';

const API_URL = 'https://blogapi.fly.dev';

const user = JSON.parse(localStorage.getItem('user'));

const config = {
  headers: {
    Authorization: `Bearer ${user?.token}`,
  },
};

const deleteComment = async (id) => {
  try {
    const result = await axios.delete(`${API_URL}/message/${id}`, config);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

const commentService = { deleteComment };

export default commentService;
