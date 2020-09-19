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
    const response = await fetch('/create_link_token', { method: 'POST' });
    const responseJSON = await response.json();
    return responseJSON.link_token;
  }
};

