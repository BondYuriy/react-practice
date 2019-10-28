import React from "react";
import UserList from "./user-list";
import users from "../data.json";

const App = () => <UserList users={users} />;

export default App;
