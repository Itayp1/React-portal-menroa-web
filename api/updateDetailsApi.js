import axios from "axios";
const updateDetailsApi = async (details, setShowModal) => {
  try {
    details.pageName = "entryPage";
    const { data } = await axios.post("http://localhost:3001/api/PageDetails", details);
    setShowModal(true);

    return data;
  } catch (error) {
    console.log(error);

    return {};
  }
};

export default updateDetailsApi;
