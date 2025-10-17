import {useState} from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../redux/action/auth.action";
import { useNavigate } from "react-router-dom";
const initialState ={
  email:'',
  password:''
}
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
   // onChange
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // onSubmit
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      dispatch(loginUserAction(formData)).unwrap();
      navigate('/dashboard');
    };
    const{email,password}= formData;
  return (
    <>
      <section class="container">
        <div class="alert alert-danger">Invalid credentials</div>
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" name="password" value={password}onChange={onChange} />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p>
      </section>
    </>
  );
};

export default Login;
