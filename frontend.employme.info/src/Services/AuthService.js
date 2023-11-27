import axios from "axios";

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await axios.post("http://localhost:5000/login/find", credentials);
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  logout: () => {
    sessionStorage.removeItem("token");
    
  },

  isAuthenticated: () => {
    return sessionStorage.getItem("token") !== null;
  },
};

export default AuthService;
