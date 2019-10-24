import React from "react";
import UserCard from "./user-card";

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <UserCard imgUrl={user.imgUrl} name={user.name} age={user.age} />
      </li>
    ))}
  </ul>
);

export default UserList;
