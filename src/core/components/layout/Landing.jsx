// import React from "react";

// const Landing = () => {
//   return (
//     <>

//       <section class="landing">
//         <div class="dark-overlay">
//           <div class="landing-inner">
//             <h1 class="x-large">Developer Connector</h1>
//             <p class="lead">
//               Create a developer profile/portfolio, share posts and get help
//               from other developers
//             </p>
//             <div class="buttons">
//               <a href="register.html" class="btn btn-primary">
//                 Sign Up
//               </a>
//               <a href="login.html" class="btn btn-light">
//                 Login
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Landing;
import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import landingBg from "../../../assets/img/showcase.jpg";
import CommonButton from "../common/Button";

const Landing = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${landingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Landing content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Developer Connector
        </Typography>

        <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
          Create a developer profile/portfolio, share posts, and get help from
          other developers.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <CommonButton
            component={RouterLink}
            to="/auth/register"
            variant="contained"
            color="primary"
            size="large"
            label="Sign Up"
            sx={{ textTransform: "none", fontWeight: 600 }}
          ></CommonButton>
          <CommonButton
            component={RouterLink}
            to="/auth/login"
            variant="outlined"
            color="inherit"
            size="large"
            label="Login"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderColor: "white",
              "&:hover": { borderColor: "primary.main" },
            }}
          ></CommonButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Landing;
