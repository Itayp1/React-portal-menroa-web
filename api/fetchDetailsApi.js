const fetchDetailsApi = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/api/PageDetails/entryPage");

    return data;
  } catch (error) {
    return {};
  }
};

export default fetchDetailsApi;
