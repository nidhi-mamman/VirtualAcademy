import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usercontext from './Contextapi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setflag } = useContext(usercontext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/login", {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await response.json();

      if (result.statuscode === 1) {
        alert("Login Successful");
        setflag(result.utype);
        localStorage.setItem('flag', result.utype);
        localStorage.setItem("userId", result.memberdata._id);
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login");
    }
  };

  return (
    <div className="container-fluid" style={{ background: '#f8f9fa', padding: '20px' }}>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow" style={{ borderRadius: '15px' }}>
            <div className="card-body p-4 p-md-5">
              <h3 className="text-center mb-4 pb-2 pb-md-0 mb-md-5 fs-1">Login to your account</h3>

              {error && (
                <div className="alert alert-danger mb-4" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                  </div>
                  <a href="#!" className="text-decoration-none">Forgot password?</a>
                </div>

                <div className="d-grid">
                  <button
                    className="btn  btn-lg"
                    type="submit"
                    style={{ background: 'linear-gradient(120deg, rgb(115, 50, 142) 0%, rgb(90, 39, 111) 100%)', color: 'white' }}
                  >
                    Login
                  </button>
                </div>

                <div className="text-center mt-4">
                  <p className="mb-0">Don't have an account?
                    <a href="/signup" className="text-decoration-none ms-1">Sign up</a>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-center mb-3">or sign in with:</p>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                      style={{ color: '#ad34d2ff' }}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                      style={{ color: '#ad34d2ff' }}
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                      style={{ color: '#ad34d2ff' }}
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;