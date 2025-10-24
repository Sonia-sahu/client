import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadUserAction,
  registerUserAction,
} from "../redux/action/auth.action";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Container, Box, Typography, Button, Stack, Link } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CommonTextField from "../../core/components/common/TextFields";
import CommonButton from "../../core/components/common/Button";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUserAction(formData)).unwrap();
      // dispatch(loadUserAction());
      navigate("/dashboard");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <PersonAddAltIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Create Your Account
        </Typography>
      </Box>

      {/* Form */}
      {/* Form */}
      <Box component="form" onSubmit={onSubmit}>
        <Stack spacing={3}>
          <CommonTextField
            label="Name"
            name="name"
            required
            value={name}
            onChange={onChange}
            fullWidth
          />
          <CommonTextField
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            fullWidth
            helperText="This site uses Gravatar. Use a Gravatar email for your profile image."
          />
          <CommonTextField
            label="Password"
            name="password"
            type="password"
            inputProps={{ minLength: 6 }}
            value={password}
            onChange={onChange}
            fullWidth
          />
          <CommonTextField
            label="Confirm Password"
            name="password2"
            type="password"
            inputProps={{ minLength: 6 }}
            value={password2}
            onChange={onChange}
            fullWidth
          />
          <CommonButton
            type="submit"
            variant="contained"
            // color="primary"
            size="large"
            sx={{ py: 1.2, textTransform: "none", fontWeight: 600 }}
            label="Register"
            color="success"
          ></CommonButton>
        </Stack>
      </Box>

      {/* Footer */}
      <Typography variant="body1" align="center" sx={{ mt: 3 }}>
        Already have an account?{" "}
        <Link
          component={RouterLink}
          to="/auth/login"
          underline="hover"
          color="primary"
          fontWeight={600}
        >
          Sign In
        </Link>
      </Typography>
    </Container>
  );
};

export default Register;
