import React from "react";

function UserComponent(props) {
  return (
    <div className="user-container">
      <h1>{props.name}</h1>
      <em>Email: {props.email}</em>
    </div>
  );
}

export default UserComponent;