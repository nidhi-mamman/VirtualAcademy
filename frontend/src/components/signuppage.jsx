import { useState } from 'react';

const Signuppage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/signup", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const result = await response.json();
      if (result.statuscode === 1) {
        alert("Signup successful");
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        alert(result.message || "Failed to sign up");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during signup");
    }
  };

  return (
    <div className="container-fluid" style={{ background: '#f8f9fa',padding: '20px'}}>
      <div className="row justify-content-center h-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 fs-1">Sign Up</h2>
              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn w-100 py-2" style={{ background: 'linear-gradient(120deg, rgb(115, 50, 142) 0%, rgb(90, 39, 111) 100%)', color: 'white' }}
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account? <a href="/login">Log In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;