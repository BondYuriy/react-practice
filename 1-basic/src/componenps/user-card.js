import React from "react";

const UserCard = ({ imgUrl, name, age }) => (
  <>
    <img src={imgUrl} alt="qwe" />
    <h2>{name}</h2>
    <span>{age}</span>
  </>
);

export default UserCard;
