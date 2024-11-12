import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Sample data; replace with API data as needed
    setUsers([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">User List</h2>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <li 
            key={user.id} 
            className="p-6 bg-white rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="block text-lg font-semibold text-gray-700">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
