import axios from "axios";
const updateDetailsApi = async (details, setShowModal) => {
  try {
    details.pageName = "entryPage";
    const { data } = await axios.post("https://portal-menroa-api.herokuapp.com/api/PageDetails", details);
    setShowModal(true);

    return data;
  } catch (error) {
    console.log(error);

    return {};
  }
};

export default updateDetailsApi;
