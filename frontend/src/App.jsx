import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "./UserContext";
import Profile from "./components/Profile";
import UserAuth from "./components/UserAuth";
import BrowseRestaurant from "./components/BrowseRestaurant";
import BookRestaurant from "./components/BookRestaurant";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
      <UserProvider>
        <AnimatePresence>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="home" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<UserAuth> <Profile /> </UserAuth>} path="profile" />
            <Route element={<BrowseRestaurant />} path="browse" />
            <Route element={<BookRestaurant />} path="book/:index" />
          </Routes>
        </AnimatePresence>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;