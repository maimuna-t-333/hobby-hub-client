import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FeaturedCard from '../../Components/FeaturedCard';
// import FeaturedCard from '../Components/FeaturedCard';

const fetchHobbies = async (sortOrder, searchTerm) => {
  const params = new URLSearchParams();
  if (sortOrder) params.append('sort', sortOrder);
  if (searchTerm) params.append('search', searchTerm);

  const res = await fetch(`https://hobby-hub-server-psi.vercel.app/hobby?${params.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch hobbies');
  }
  return res.json();
};

const AllGroup = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: hobbies = [], isLoading, isError, error } = useQuery({
    queryKey: ['hobbies', sortOrder, searchTerm],
    queryFn: () => fetchHobbies(sortOrder, searchTerm),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#3A0519]">All Hobby Groups</h2>

      {/* Search & Sort Controls */}
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search hobbies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-1/3"
        />
        <div className="flex items-center space-x-2">
          <label className="font-medium">Sort:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="asc">Ascending </option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Hobby List */}
      {hobbies.length === 0 ? (
        <div className="text-center my-12">No hobby groups found.</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <FeaturedCard key={hobby._id} hobby={hobby} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroup;