import axios from 'axios';

const API_URL = 'http://localhost:3000';
const user = JSON.parse(localStorage.getItem('user'));

const config = {
  headers: {
    Authorization: `Bearer ${user?.token}`,
  },
};

const sendComment = async (data) => {
  try {
    const result = await axios.post(`${API_URL}/message`, data);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
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

const commentService = { sendComment, deleteComment };

export default commentService;
