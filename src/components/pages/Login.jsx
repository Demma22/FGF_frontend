import React, {useState} from "react"
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');


    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);

    }
    return (
      <div className="auth-form-container">
        <h2> Login </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlfor="email"> Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlfor="password"> Password</label>
          <input
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
          <button type="submit"> Log In </button>
        </form>
        <Link to={"/Register"}>
          <button
            className="link-btn"
            // onClick={() => props.onFormSwitch('Login')}
          >
            Dont have an account? Register here.
          </button>
        </Link>
      </div>
    );
}