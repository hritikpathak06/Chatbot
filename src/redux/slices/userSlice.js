import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/server";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const { data } = await axios.post(
      `${BASE_URL}/user/login`,
      { email, password },
      { withCredentials: true }
    );
    // localStorage.setItem("user", JSON.stringify(data));
    return data;
  }
);

// Async thunk for registering a user
export const registerUser = createAsyncThunk(
  "user/register",
  async ({ username, email, password }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/user/register`,
        { username, email, password },
        { withCredentials: true }
      );
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      throw new Error("Registration failed. Please try again.");
    }
  }
);


// Async thunk for laoding user data
export const loadUser = createAsyncThunk("user/load", async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/user/me`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    throw new Error("Failed to load user data."); 
  }
});


// Async thunk for Logout
export const logoutUser = createAsyncThunk("user/logout",async() => {
  try {
    const {data} = await axios.post(`${BASE_URL}/user/logout`);
    return data;
  } catch (error) {
    throw new Error("Failed to load user data."); 
  }
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    laoding: false,
    user: null,
    isAuthenticated: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    // Login User
      .addCase(loginUser.pending, (state) => {
        state.laoding = true;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.laoding = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.laoding = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
        console.error(action.error.message);
      })
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.laoding = true;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.laoding = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.laoding = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
        console.error(action.error.message);
      })
      // Load User
      .addCase(loadUser.pending, (state) => {
        state.laoding = true;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.laoding = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.laoding = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
        console.error(action.error.message);
      })
      // logout user
      .addCase(logoutUser.fulfilled,(state,action) => {
        state.laoding = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
        state.message = action.payload;
        // console.log(action.error.message);
      })
  },
});

export default userSlice.reducer;
