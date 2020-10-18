import axios from "axios";
const fetchDetailsApi = async () => {
  try {
    const { data } = await axios.get("https://portal-menroa-api.herokuapp.com/api/PageDetails/entryPage");

    return data;
  } catch (error) {
    return {};
  }
};

export default fetchDetailsApi;
