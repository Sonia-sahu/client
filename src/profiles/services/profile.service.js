import API from "../../utils/api";

export const createProfile = async (formData) => {
  try {
    const response = await API.post("/profile", formData);
    console.log(response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

export const getCurrentProfile = async () => {
  try {
    const response = await API.get("/profile/me");
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

export const addExperience = async (formData) => {
  try {
    const response = await API.put("/profile/experience", formData);
    console.log(response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

export const addEducation = async (formData) => {
  try {
    const response = await API.put("/profile/education", formData);
    console.log(response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};
