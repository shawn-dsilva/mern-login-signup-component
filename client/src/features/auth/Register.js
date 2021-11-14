import React, {useState} from 'react'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = () => {

    }

    return (
      <div className="auth-card">
        <div className="auth-card-container">
        <h1>REGISTER</h1>

        <label>Username </label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label>Email </label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button  onClick={(e) => handleSubmit(e)}>
          Register
        </button>
        </div>
      </div>
    );
}

export default Register
