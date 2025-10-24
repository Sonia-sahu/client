// import React, { useEffect } from "react";
// import DashboardAction from "./DashboardAction";
// import ExpDetails from "./ExpDetails";
// import EduDetails from "./EduDetails";
// import { Link } from "react-router-dom";

// // import { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getCurrentProfileAction } from "../../profiles/redux/action/profile.action";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const { profile, error } = useSelector((state) => state.profile);
//   const firstName =
//     profile?.user?.name &&
//     profile.user.name.split(" ")[0].charAt(0).toUpperCase() +
//       profile.user.name.split(" ")[0].slice(1);

//   useEffect(() => {
//     //to call the action
//     //then according to the response we will show the create profile or dashboard with details
//     dispatch(getCurrentProfileAction());
//   }, []);

//   const renderDashboard = (
//     <section class="container">
//       <h1 class="large text-primary">Dashboard</h1>
//       <p class="lead">
//         <i class="fas fa-user"></i> Welcome {firstName || "User"}
//       </p>
//       <DashboardAction></DashboardAction>

//       <ExpDetails experience={profile?.experience}></ExpDetails>
//       <EduDetails education={profile?.education}></EduDetails>

//       <div class="my-2">
//         <button class="btn btn-danger">
//           <i class="fas fa-user-minus"></i>
//           Delete My Account
//         </button>
//       </div>
//     </section>
//   );
//   const createProfile = (
//     <section className="container">
//       <h2 className="my-2">Dashboard</h2>
//       <p>You haven’t created a profile yet.</p>
//       <Link to="/profile/create-profile" className="btn btn-primary">
//         Create Profile
//       </Link>
//     </section>
//   );
//   return (
//     <>
//       {/**
//     if i will write the conditions here , would be difficult to trace them */}
//       {profile == null ? createProfile : renderDashboard}

//       {/* {error!=null ? createProfile : renderDashboard} */}
//     </>
//   );
// };

// export default Dashboard;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfileAction } from "../../profiles/redux/action/profile.action";
import DashboardAction from "./DashboardAction";
import ExpDetails from "./ExpDetails";
import EduDetails from "./EduDetails";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import CommonButton from "../../core/components/common/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  const firstName =
    profile?.user?.name &&
    profile.user.name.split(" ")[0].charAt(0).toUpperCase() +
      profile.user.name.split(" ")[0].slice(1);

  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, [dispatch]);

  const renderDashboard = (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" color="primary" fontWeight={700} gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        <PersonIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        Welcome {firstName || "User"}
      </Typography>

      <DashboardAction />

      <Box sx={{ mt: 4 }}>
        <ExpDetails experience={profile?.experience} />
        <EduDetails education={profile?.education} />
      </Box>

      <Box sx={{ mt: 4 }}>
        <CommonButton
          variant="contained"
          color="warning"
          label=" Delete My Account"
          startIcon={<DeleteIcon />}
        ></CommonButton>
      </Box>
    </Container>
  );

  const createProfile = (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        You haven’t created a profile yet.
      </Typography>
      <CommonButton
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/profile/create-profile"
        label="Create Profile"
      ></CommonButton>
    </Container>
  );

  return <>{profile == null ? createProfile : renderDashboard}</>;
};

export default Dashboard;
