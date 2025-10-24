// import React from "react";
// import {
//   addEducationAction,
//   getCurrentProfileAction,
// } from "../../redux/action/profile.action";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// const AddEducation = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { profile, error } = useSelector((state) => state.profile);

//   const [formData, setFormData] = useState({
//     school: "",
//     degree: "",
//     fieldofstudy: "",
//     from: "",
//     to: "",
//     current: false,
//     description: "",
//   });
//   const { school, degree, fieldofstudy, from, to, current, description } =
//     formData;

//   // onChange
//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   // onSubmit
//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     dispatch(addEducationAction(formData)).unwrap();
//     dispatch(getCurrentProfileAction);
//     navigate("/dashboard");
//   };
//   // useEffect(() => {
//   //   setFormData();
//   // }, []);

//   return (
//     <>
//       <section class="container">
//         <h1 class="large text-primary"> Add Your Education </h1>
//         <p class="lead">
//           <i class="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
//           that you have attended
//         </p>
//         <small>* = required field</small>
//         <form class="form" onSubmit={onSubmit}>
//           <div class="form-group">
//             <input
//               type="text"
//               placeholder="* School or Bootcamp"
//               name="school"
//               required
//               value={school}
//               onChange={onChange}
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="text"
//               placeholder="* Degree or Certificate"
//               name="degree"
//               required
//               value={degree}
//               onChange={onChange}
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="text"
//               placeholder="Field Of Study"
//               name="fieldofstudy"
//               value={fieldofstudy}
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
//                 value={current}
//                 onChange={onChange}
//               />{" "}
//               Current School or Bootcamp
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
//               placeholder="Program Description"
//               value={description}
//               onChange={onChange}
//             ></textarea>
//           </div>
//           <input type="submit" class="btn btn-primary my-1" />
//           <Link className="btn btn-light my-1" to="/dashboard">
//             Go Back
//           </Link>
//         </form>
//       </section>
//     </>
//   );
// };

// export default AddEducation;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducationAction,
  getCurrentProfileAction,
} from "../../redux/action/profile.action";
import { useNavigate, Link as RouterLink } from "react-router-dom";
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
import SchoolIcon from "@mui/icons-material/School";
import CommonTextField from "../../../core/components/common/TextFields";
import CommonButton from "../../../core/components/common/Button";

const AddEducation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

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
      await dispatch(addEducationAction(formData)).unwrap();
      dispatch(getCurrentProfileAction());
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to add education:", err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" color="primary" fontWeight={700} gutterBottom>
          Add Your Education
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <SchoolIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Add any school, bootcamp, etc. that you have attended
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          * = required field
        </Typography>
      </Box>

      <Box component="form" onSubmit={onSubmit} noValidate>
        <Stack spacing={3}>
          <CommonTextField
            label="School or Bootcamp *"
            name="school"
            value={school}
            onChange={onChange}
            required
            fullWidth
          />
          <CommonTextField
            label="Degree or Certificate *"
            name="degree"
            value={degree}
            onChange={onChange}
            required
            fullWidth
          />
          <CommonTextField
            label="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
            fullWidth
          />
          <CommonTextField
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
            label="Current School or Bootcamp"
          />
          <CommonTextField
            label="To Date"
            name="to"
            type="date"
            value={to}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            disabled={current}
          />
          <CommonTextField
            label="Program Description"
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

export default AddEducation;
