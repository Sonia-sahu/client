import { Route, Routes } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";
import AddExperience from "../components/forms/AddExperience";
import AddEducation from "../components/forms/AddEducation";
const ProfileRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/create-profile" element={<CreateProfile />}></Route>

        <Route path="/edit-profile" element={<CreateProfile />}></Route>
        <Route path="/education" element={<AddEducation />}></Route>
        <Route path="/experience" element={<AddExperience />}></Route>
      </Routes>
    </>
  );
};

export default ProfileRouter;
