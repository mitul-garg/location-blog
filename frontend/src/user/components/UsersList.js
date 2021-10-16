import React from "react";

import { UserItem } from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import "./UsersList.css";
export const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <Card>
        <div className="center">
          <h2>No users found!</h2>
        </div>
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {items.map((user) => {
        const { id, image, name, places } = user;
        return (
          <UserItem
            key={id}
            id={id}
            image={image}
            name={name}
            placeCount={places.length}
          />
        );
      })}
    </ul>
  );
};
