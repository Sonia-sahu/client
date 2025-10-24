// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loadUserAction, loginUserAction } from "../redux/action/auth.action";
// import { useNavigate } from "react-router-dom";
// const initialState = {
//   email: "",
//   password: "",
// };
// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState(initialState);
//   // onChange
//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   // onSubmit
//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     dispatch(loginUserAction(formData)).unwrap();
//     dispatch(loadUserAction);
//     navigate("/dashboard");
//   };
//   const { email, password } = formData;
//   return (
//     <>
//       <section class="container">
//         <div class="alert alert-danger">Invalid credentials</div>
//         <h1 class="large text-primary">Sign In</h1>
//         <p class="lead">
//           <i class="fas fa-user"></i> Sign into Your Account
//         </p>
//         <form class="form" onSubmit={onSubmit}>
//           <div class="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               required
//               value={email}
//               onChange={onChange}
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={onChange}
//             />
//           </div>
//           <input type="submit" class="btn btn-primary" value="Login" />
//         </form>
//         <p class="my-1">
//           Don't have an account? <a href="register.html">Sign Up</a>
//         </p>
//       </section>
//     </>
//   );
// };

// export default Login;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadUserAction, loginUserAction } from "../redux/action/auth.action";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Container, Box, Typography, Stack, Link, Alert } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CommonTextField from "../../core/components/common/TextFields";
import CommonButton from "../../core/components/common/Button";
import { loadPostsAction } from "../../posts/redux/action/post.action";
const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUserAction(formData)).unwrap();
      await dispatch(loadUserAction());
      await dispatch(loadPostsAction());
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>
          Sign In
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <LoginIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Sign into Your Account
        </Typography>
      </Box>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Form */}
      <Box component="form" onSubmit={onSubmit} noValidate>
        <Stack spacing={3}>
          <CommonTextField
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            required
            fullWidth
          />
          <CommonTextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={onChange}
            required
            fullWidth
          />
          <CommonButton
            type="submit"
            variant="contained"
            // color="primary"
            label="Login"
            color="success"
          ></CommonButton>
        </Stack>
      </Box>

      {/* Footer */}
      <Typography variant="body1" align="center" sx={{ mt: 3 }}>
        Don't have an account?{" "}
        <Link
          component={RouterLink}
          to="/auth/register"
          underline="hover"
          color="primary"
          fontWeight={600}
        >
          Sign Up
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
