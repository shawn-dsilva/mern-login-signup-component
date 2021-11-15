import { createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const headers =  {
    "Content-Type": "application/json"
  };
export const isAuth = createAsyncThunk(
    'auth/isAuth',
    async () => {
      const response = await axios.get("/api/users/authchecker",{withCredentials:true});
      return response.data;
    }
  );

export const Login = createAsyncThunk(
    'auth/Login',
    async (data) => {
      const response = await axios.post("/api/users/login", data, headers, {withCredentials: true});
      return response.data;
    }
  );

export const RegisterThunk = createAsyncThunk(
    'auth/Register',
    async (data) => {
      const response = await axios.post("/api/users/register", data, headers, {withCredentials: true});
      return response.data;
    }
  );