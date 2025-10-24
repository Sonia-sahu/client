// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   addExperienceAction,
//   getCurrentProfileAction,
// } from "../../redux/action/profile.action";
// const AddExperience = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { profile, error } = useSelector((state) => state.profile);
//   const [formData, setFormData] = useState({
//     title: "",
//     company: "",
//     location: "",
//     from: "",
//     to: "",
//     current: false,
//     description: "",
//   });
//   const { title, company, location, from, to, current, description } = formData;

//   // onChange
//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   // onSubmit
//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     dispatch(addExperienceAction(formData)).unwrap();
//     dispatch(getCurrentProfileAction);
//     navigate("/dashboard");
//   };
//   return (
//     <>
//       <section class="container">
//         <h1 class="large text-primary"> Add An Experience </h1>
//         <p class="lead">
//           <i class="fas fa-code-branch"></i> Add any developer/programming
//           positions that you have had in the past
//         </p>
//         <small>* = required field</small>
//         <form class="form" onSubmit={onSubmit}>
//           <div class="form-group">
//             <input
//               type="text"
//               placeholder="* Job Title"
//               name="title"
//               required
//               value={title}
//               onChange={onChange}
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="text"
//               placeholder="* Company"
//               name="company"
//               required
//               value={company}
//               onChange={onChange}
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="text"
//               placeholder="Location"
//               name="location"
//               value={location}
//               onChange={onChange}
//             />
//           </div>
//           <div class="form-group">
//             <h4>From Date</h4>{" "}
//             <input type="date" name="from" value={from} onChange={onChange} />
//           </div>
//           <div class="form-group">
//             <p>
//               <input
//                 type="checkbox"
//                 name="current"
//                 value=""
//                 onChange={onChange}
//               />{" "}
//               Current Job
//             </p>
//           </div>
//           <div class="form-group">
//             <h4>To Date</h4>{" "}
//             <input type="date" name="to" value={to} onChange={onChange} />
//           </div>
//           <div class="form-group">
//             <textarea
//               name="description"
//               cols="30"
//               rows="5"
//               placeholder="Job Description"
//               value={description}
//               onChange={onChange}
//             ></textarea>
//           </div>
//           <input type="submit" class="btn btn-primary my-1" />
//           <a class="btn btn-light my-1" href="dashboard.html">
//             Go Back
//           </a>
//         </form>
//       </section>
//     </>
//   );
// };

// export default AddExperience;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  addExperienceAction,
  getCurrentProfileAction,
} from "../../redux/action/profile.action";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CodeBranchIcon from "@mui/icons-material/CallSplit";
import CommonButton from "../../../core/components/common/Button";

const AddExperience = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { title, company, location, from, to, current, description } = formData;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addExperienceAction(formData)).unwrap();
      dispatch(getCurrentProfileAction());
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to add experience:", err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" color="primary" fontWeight={700} gutterBottom>
          Add An Experience
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <CodeBranchIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Add any developer/programming positions that you have had in the past
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          * = required field
        </Typography>
      </Box>

      <Box component="form" onSubmit={onSubmit} noValidate>
        <Stack spacing={3}>
          <TextField
            label="Job Title *"
            name="title"
            value={title}
            onChange={onChange}
            required
            fullWidth
          />
          <TextField
            label="Company *"
            name="company"
            value={company}
            onChange={onChange}
            required
            fullWidth
          />
          <TextField
            label="Location"
            name="location"
            value={location}
            onChange={onChange}
            fullWidth
          />
          <TextField
            label="From Date"
            name="from"
            type="date"
            value={from}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox name="current" checked={current} onChange={onChange} />
            }
            label="Current Job"
          />
          <TextField
            label="To Date"
            name="to"
            type="date"
            value={to}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            disabled={current}
          />
          <TextField
            label="Job Description"
            name="description"
            multiline
            rows={4}
            value={description}
            onChange={onChange}
            fullWidth
          />
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

export default AddExperience;
