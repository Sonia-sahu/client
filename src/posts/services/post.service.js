export const getAllPosts = async () => {
  try {
    const response = await API.get("/posts");
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

export const createPost = async (formData) => {
  try {
    const response = await API.post("/posts", formData);
    console.log(response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};
export const getPostById = async (postId) => {
  try {
    const response = await API.get(`/posts/${postId}`);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};
