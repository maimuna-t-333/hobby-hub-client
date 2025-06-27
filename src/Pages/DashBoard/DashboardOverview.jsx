import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router';

const DashboardOverview = ({ allGroups = 0, myGroups = [] }) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
      <p className="text-gray-600 mb-8">
        Welcome back, <span className="font-semibold">{user?.displayName || "User"}</span>!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">Total Groups</p>
          <p className="text-2xl font-bold">{allGroups}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">My Groups</p>
          <p className="text-2xl font-bold">{myGroups.length}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">My Recent Groups</h2>
        <ul className="space-y-3">
          {myGroups.map(group => (
            <li key={group._id} className="p-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer">
              <h3 className="font-semibold">{group.groupName}</h3>
              <p className="text-gray-500 text-sm">{group.hobbyCategory}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex space-x-4">
        <Link to='addGroup' className="bg-[#944E63] text-white px-4 py-2 rounded hover:bg-[#7a3f4f] transition">
          Add New Group
        </Link>
        <Link to='allGroup' className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">
          View All Groups
        </Link>
      </div>
    </div>
  );
};

export default DashboardOverview;

