import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../slices/authSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const [username, setUsername] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignIn = () => {
    const existingUser = users.find((user) => user.name === username);

    if (existingUser) {
      dispatch(signIn(existingUser));
    } else {
      alert("User not found. Please sign up first.");
    }
  };

  const handleSignUp = () => {
    const newUser = {
      id: Date.now(),
      name: username,
    };

    dispatch(signUp(newUser));
    setIsSigningUp(false); // Switch back to sign-in mode after signing up
  };

  return (
    <div className="max-w-xs mx-auto mt-8">
      <div className="text-4xl font-bold my-3">Instagram</div>
      <h1 className="text-3xl font-semibold mb-4">
        {isSigningUp ? "Sign Up" : "Sign In"}
      </h1>
      <label className="block mb-4">
        Username:
        <input
          type="text"
          className="w-full px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      {isSigningUp ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      )}
      <br />
      {!isSigningUp && (
        <span className="mt-2 block">
          Don't have an account?{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsSigningUp(true)}
          >
            Sign Up
          </button>
        </span>
      )}
    </div>
  );
};

export default UserForm;
