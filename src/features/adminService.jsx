import axios from 'axios';

const API_URL = 'http://localhost:3000';

const login = async (credentials) => {
  try {
    const result = await axios.post(`${API_URL}/admin/login`, credentials);
    if (result.status === 200) {
      localStorage.setItem('user', JSON.stringify(result.data));
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const adminService = {
  login,
};

export default adminService;
