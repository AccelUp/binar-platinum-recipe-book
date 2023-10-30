import { useState, useEffect } from "react";
import { Router, Route } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_SERVER_RECIPE + "/users"
        );
        if (response.ok) {
          const data = await response.json();
          setUsers(data.data);
          console.log(data.data);
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <div className="flex w-5 pt-20">
          <article className="bg-white p-4 shadow rounded">
            <h1 className="text-2xl font-bold">Users List</h1>
            {users?.length ? (
              <ul className="mt-4">
                {users.map((user, i) => (
                  <li key={i} className="list-disc ml-4">
                    {user?.username}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500">No user to display</p>
            )}
          </article>
        </div>
      </div>
    </>
  );
};

export default Users;
