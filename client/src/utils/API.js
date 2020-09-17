import axios from "axios";
const token = () => JSON.parse(localStorage.getItem("authuser")).token;

export default {
  getCards: async () => {
    try {
      const response = await axios("/api/messages", {
        headers: {
          Authorization: "Bearer " + token(),
        },
      });

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
  getLinkToken: async () => {
    try {
      const res = await axios("/api/create_link_token", {
        headers: {
          Authorization: "Bearer " + token(),
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
};

