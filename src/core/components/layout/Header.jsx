// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// const Header = () => {
//   const dispatch = useDispatch();
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   const authLinks = (
//     <>
//       <li>
//         <Link to="/profiles">Developers</Link>
//       </li>
//       <li>
//         <Link to="/posts/createpost">Posts</Link>
//       </li>
//       <li>
//         <Link to="/dashboard" title="Dashboard">
//           <i className="fas fa-user"></i>{" "}
//           <span className="hide-sm">Dashboard</span>
//         </Link>
//       </li>
//       <li>
//         <button className="btn btn-link" title="Logout">
//           <i className="fas fa-sign-out-alt"></i>{" "}
//           <span className="hide-sm">Logout</span>
//         </button>
//       </li>
//     </>
//   );
//   const guestLinks = (
//     <>
//       <li>
//         <Link to="/profiles">Developers</Link>
//       </li>
//       <li>
//         <Link to="/auth/register">Register</Link>
//       </li>
//       <li>
//         <Link to="/auth/login">Login</Link>
//       </li>
//     </>
//   );

//   return (
//     <nav className="navbar bg-dark">
//       <h1>
//         <Link to="/">
//           <i className="fas fa-code"></i> DevConnector
//         </Link>
//       </h1>
//       <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
//     </nav>
//   );
// };

// export default Header;
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import CommonButton from "../common/Button";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "grey.900" }}>
      <Toolbar>
        {/* Logo / Title */}
        <IconButton
          component={RouterLink}
          to="/"
          edge="start"
          color="inherit"
          sx={{ mr: 1 }}
        >
          <CodeIcon />
        </IconButton>

        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            color: "inherit",
            textDecoration: "none",
            flexGrow: 1,
            fontWeight: 600,
          }}
        >
          DevConnector
        </Typography>

        {/* Navigation Links */}
        <Stack direction="row" spacing={2}>
          <CommonButton
            component={RouterLink}
            to="/profiles"
            sx={{ textTransform: "none" }}
            label="Developers"
            color="navbarDark"
          ></CommonButton>
          <CommonButton
            component={RouterLink}
            to="/auth/register"
            sx={{ textTransform: "none" }}
            label="Register"
            color="navbarDark"
          ></CommonButton>
          <CommonButton
            component={RouterLink}
            to="/auth/login"
            sx={{ textTransform: "none" }}
            label="Login"
            color="navbarDark"
          ></CommonButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
