// import React from "react";
// import { Link } from "react-router-dom";

// const DashboardAction = () => {
//   return (
//     <>
//       <div className="dash-buttons">
//         <Link to="/profile/edit-profile" className="btn btn-light">
//           <i className="fas fa-user-circle text-primary"></i> Edit Profile
//         </Link>
//         <Link to="/profile/experience" className="btn btn-light">
//           <i className="fab fa-black-tie text-primary"></i> Add Experience
//         </Link>
//         <Link to="/profile/education" className="btn btn-light">
//           <i className="fas fa-graduation-cap text-primary"></i> Add Education
//         </Link>
//       </div>
//     </>
//   );
// };

// export default DashboardAction;
import React from "react";
import { Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CommonButton from "../../core/components/common/Button";

const DashboardAction = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap" }}>
      <CommonButton
        component={RouterLink}
        to="/profile/edit-profile"
        variant="outlined"
        color="info"
        startIcon={<PersonIcon />}
        label=" Edit Profile"
      ></CommonButton>
      <CommonButton
        component={RouterLink}
        to="/profile/experience"
        color="info"
        variant="outlined"
        startIcon={<WorkIcon />}
        label="Add Experience"
      ></CommonButton>
      <CommonButton
        component={RouterLink}
        to="/profile/education"
        color="info"
        variant="outlined"
        startIcon={<SchoolIcon />}
        label=" Add Education"
      ></CommonButton>
    </Stack>
  );
};

export default DashboardAction;
