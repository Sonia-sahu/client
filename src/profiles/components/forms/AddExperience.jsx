import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addExperienceAction,
  getCurrentProfileAction,
} from "../../redux/action/profile.action";
const AddExperience = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, error } = useSelector((state) => state.profile);
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

  // onChange
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addExperienceAction(formData)).unwrap();
    dispatch(getCurrentProfileAction);
    navigate("/dashboard");
  };
  return (
    <>
      <section class="container">
        <h1 class="large text-primary"> Add An Experience </h1>
        <p class="lead">
          <i class="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              required
              value={title}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              required
              value={company}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <h4>From Date</h4>{" "}
            <input type="date" name="from" value={from} onChange={onChange} />
          </div>
          <div class="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                value=""
                onChange={onChange}
              />{" "}
              Current Job
            </p>
          </div>
          <div class="form-group">
            <h4>To Date</h4>{" "}
            <input type="date" name="to" value={to} onChange={onChange} />
          </div>
          <div class="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
          <input type="submit" class="btn btn-primary my-1" />
          <a class="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </>
  );
};

export default AddExperience;
