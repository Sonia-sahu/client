import API from "../../utils/api";
// load user details
// export const createPost = async () => {
//   try {
//     // URL: http://localhost:9500/api/posts
//     // method: GET
//     // headers: {x-auth-token: token}
//     // response(success): {user details}
//     // response(failure): {error validational details}
//     const response = await API.get("/posts");
//     // below return is ur success response
//     console.log(response);
//     localStorage.setItem("token", response.data.token);
//     return { data: response.data, status: response.status };
//   } catch (error) {}
// };
export const submitPost = async (postData) => {
  try {
    const response = await API.post("/posts", postData);
    return response;
  } catch (error) {
    throw error.response.data;
  }
};
export const deletePost = async (postId) => {
  try {
    const response = await API.delete(`${"/posts"}/${postId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const loadPost = async () => {
  try {
    const response = await API.get("/posts");
    return { data: response.data };
  } catch (error) {
    throw error.response.data;
  }
};
