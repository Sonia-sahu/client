import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Twitter,
  Facebook,
  YouTube,
  LinkedIn,
  Instagram,
  Person,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate, Link as RouterLink } from "react-router-dom";
import {
  createProfileAction,
  getCurrentProfileAction,
} from "../../redux/action/profile.action";
import CommonButton from "../../../core/components/common/Button";
import CommonTextField from "../../../core/components/common/TextFields";

const emptyForm = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  bio: "",
  githubusername: "",
  youtube: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  instagram: "",
};

const statusOptions = [
  "Developer",
  "Junior Developer",
  "Senior Developer",
  "Manager",
  "Student or Learning",
  "Instructor",
  "Intern",
  "Other",
];

const CreateProfile = () => {
  const isCreate = Boolean(useMatch("/profile/create-profile"));
  const [formState, setFormState] = useState(emptyForm);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formState;

  useEffect(() => {
    dispatch(getCurrentProfileAction()).unwrap();
    if (profile) {
      const profileData = { ...emptyForm };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      if (Array.isArray(profile.skills)) {
        profileData.skills = profile.skills.join(",");
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormState(profileData);
    }
  }, []);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createProfileAction(formState)).unwrap();
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" color="primary" fontWeight={700} gutterBottom>
          {isCreate ? "Create Your Profile" : "Edit Your Profile"}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <Person sx={{ verticalAlign: "middle", mr: 1 }} />
          Let's get some information to make your profile stand out
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          * = required field
        </Typography>
      </Box>

      <Box component="form" onSubmit={onSubmit} noValidate>
        <Stack spacing={3}>
          <CommonTextField
            select
            label="* Professional Status"
            name="status"
            value={status}
            onChange={onChange}
            required
            fullWidth
            helperText="Give us an idea of where you are at in your career"
          >
            <MenuItem value="0" disabled>
              Select Professional Status
            </MenuItem>
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </CommonTextField>

          <CommonTextField
            label="Company"
            name="company"
            value={company}
            onChange={onChange}
            fullWidth
            helperText="Could be your own company or one you work for"
          />
          <CommonTextField
            label="Website"
            name="website"
            value={website}
            onChange={onChange}
            fullWidth
            helperText="Could be your own or a company website"
          />
          <CommonTextField
            label="Location"
            name="location"
            value={location}
            onChange={onChange}
            fullWidth
            helperText="City & state suggested (e.g. Boston, MA)"
          />
          <CommonTextField
            label="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
            required
            fullWidth
            helperText="Use comma-separated values (e.g. HTML,CSS,JavaScript)"
          />
          <CommonTextField
            label="GitHub Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
            fullWidth
            helperText="Include your GitHub username to show your latest repos"
          />
          <CommonTextField
            label="Bio"
            name="bio"
            value={bio}
            onChange={onChange}
            multiline
            rows={4}
            fullWidth
            helperText="Tell us a little about yourself"
          />

          <Box>
            <CommonButton
              variant="outlined"
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              label={
                displaySocialInputs
                  ? "Hide Social Details"
                  : "Add Social Network Links"
              }
            ></CommonButton>
            <Typography variant="caption" sx={{ ml: 2 }}>
              Optional
            </Typography>
          </Box>

          {displaySocialInputs && (
            <Stack spacing={2}>
              <CommonTextField
                label="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Twitter />
                    </InputAdornment>
                  ),
                }}
              />
              <CommonTextField
                label="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Facebook />
                    </InputAdornment>
                  ),
                }}
              />
              <CommonTextField
                label="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <YouTube />
                    </InputAdornment>
                  ),
                }}
              />
              <CommonTextField
                label="LinkedIn URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkedIn />
                    </InputAdornment>
                  ),
                }}
              />
              <CommonTextField
                label="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Instagram />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          )}

          <Stack direction="row" spacing={2}>
            <CommonButton
              type="submit"
              variant="contained"
              color="success"
              label="Submit"
            ></CommonButton>
            <CommonButton
              variant="outlined"
              component={RouterLink}
              to="/dashboard"
              color="info"
              label=" Go Back"
            ></CommonButton>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateProfile;
