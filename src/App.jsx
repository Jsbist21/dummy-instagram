import React from "react";
import UserForm from "./components/UserForm";
import PostList from "./components/PostList";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      {user && (
        <div className="flex justify-between mx-5 my-2">
          <div className="text-2xl font-bold">Instagram</div>{" "}
          <div className="font-bold">Welcome, {user.name}!</div>
        </div>
      )}

      {user && <PostList />}
      {!user && <UserForm />}
    </div>
  );
};

export default App;
