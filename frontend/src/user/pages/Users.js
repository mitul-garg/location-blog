import React, { useEffect, useState } from "react";

import { UsersList } from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

export const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/users`
        );
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />};
      <div className="center" style={{ color: "whitesmoke" }}>
        <h4>
          Some features like Auto-detect coordinates, Map Previews and newly
          added images (which disappear due to Heroku sending the server to
          sleep after 30 minutes of inactivity) do not work as all those
          features require credit cards and at present I don't have one but as
          soon as I find an alternative to this problem, these features will
          also start working! Meanwhile you can use all other features..
        </h4>
      </div>
    </React.Fragment>
  );
};
