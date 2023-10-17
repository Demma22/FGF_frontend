import React, {useState} from "react"
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');


  const handleSubmit =(e) =>{
      e.preventDefault();
      console.log(email);

  };
  return (
    <div className="auth-form-container login">
      <h2> Hello Again </h2>
      <h1> Login with </h1>
      <button><img className="login" src="imgs/login/google_logo.png" alt="" /></button>
      <button><img className="login" src="imgs/login/Facebook-Logo-2019.png" alt="facebookLogo" /></button>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlfor="email"></label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Username/Email"
          id="email"
          name="email"
        />
        <label htmlfor="password">  </label>
        <input
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit"> Log In </button>
        <div>
          <a className="log" href="#">Remember me</a><a href="#">forgot password?</a>
        </div>
      </form>
      <Link to={"/Register"}>
        <button
          // className="link-btn"
          // onClick={() => props.onFormSwitch('Login')}
        className="underlog-links">
          Register/SignUp
        </button>
        <img className="login-logo llogin" src="imgs/login/fgfoundation_logo.png" alt="" />
      </Link>
    </div>
    
  );
}