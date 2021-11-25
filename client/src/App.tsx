import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./features/auth/Profile";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { useNavigate} from "react-router-dom";
import "./App.css";
import Auth from "./features/auth/Auth";
import { isAuth } from "./features/auth/authService";
import { selectAuth } from "./features/auth/authSlice";


function App() {
  const [button, buttonClicked] = useState(true);

  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isAuth());
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/profile");
    }
  }, [auth]);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/profile" element={<Profile buttonClicked={buttonClicked} />} />
          <Route path="/" element={<Auth button={button} />}>
            <Route
              path="/login"
              element={<Login buttonClicked={buttonClicked} />}
            />
            <Route
              path="/register"
              element={<Register buttonClicked={buttonClicked} />}
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
