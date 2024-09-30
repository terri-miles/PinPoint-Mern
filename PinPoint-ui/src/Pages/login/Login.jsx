import React, { useContext, useState } from "react";
import "./Login.scss";
import pin from "../../assets/pin.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import apiRequest from "../../utils/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width: 1506px)");

  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest.post("/auth/login", { username, password });
      updateUser(res.data);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
    e.target.reset();
  };
  return (
    <div className="login">
      <div className="container">
        {isLargeScreen ? (
          <div className="box">
            <div className="left">
              <img src={pin} alt="" />
            </div>
            <div className="middle"></div>
            <div className="right">
              <h1>Login here</h1>
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username here"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password here"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="checkbox">
                  <label htmlFor="remember">Remember Me</label>
                  <input type="checkbox" name="remember" />
                </div>
                <div className="options">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="linkss">
                      <span>Sign up</span>
                    </Link>
                  </p>
                  <p>
                    <span>Forgot password?</span>
                  </p>
                </div>
                <button type="submit">Login</button>
                <div className="error">{error && error}</div>
              </form>
            </div>
          </div>
        ) : (
          <div className="small_screen">
            <div className="right">
              <h1>Login here</h1>
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username here"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password here"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="checkbox">
                  <label htmlFor="remember">Remember Me</label>
                  <input type="checkbox" name="remember" />
                </div>
                <div className="options">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="linkss">
                      <span>Sign up</span>
                    </Link>
                  </p>
                  <p>
                    <span>Forgot password?</span>
                  </p>
                </div>
                <button type="submit">Login</button>
                <div className="error">{error && error}</div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
