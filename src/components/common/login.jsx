import React from "react";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" className="form-control" />
        </div>
      </form>
    </div>
  );
};

export default Login;