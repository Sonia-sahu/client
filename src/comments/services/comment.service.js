import API from "../../utils/api";

// Fetch post and its comments
export const fetchDiscussion = async (postId) => {
  try {
    const response = await API.get(`/posts/${postId}`);
    console.log(response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

// Submit a new comment
export const submitComment = async (postId, text) => {
  try {
    const response = await API.post(`/posts/comment/${postId}`, { text });
    console.log(response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

// Delete a comment
export const deleteComment = async (postId, commentId) => {
  try {
    const response = await API.delete(`/posts/comment/${postId}/${commentId}`);
    console.log(response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};
