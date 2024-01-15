import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Error from "./pages/Error";
import Chatgpt from "./pages/Chatgpt";
import store from "./redux/store";
import { loadUser } from "./redux/slices/userSlice";
import {useSelector} from "react-redux"


const App = () => {
  const {user} = useSelector((state) => state.user);

  console.log("User details : ",user)

  useEffect(() => {
    if(user){
      store.dispatch(loadUser());
    }
  },[]);

  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* {loggedIn && <Route path="/chatbot" element={<ChatBot />} />} */}
        <Route path="*" element={<Error />} />
        <Route path="/chatgpt" element={<Chatgpt />} />
      </Routes>
    </>
  );
};

export default App;
