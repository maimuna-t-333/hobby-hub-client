import React, { useEffect, useState } from 'react';
import FeaturedCard from '../Components/FeaturedCard';

const AllGroup = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hobby')
      .then(res => res.json())
      .then(data => setHobbies(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center my-6">All Hobby Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <FeaturedCard key={hobby._id} hobby={hobby} />
        ))}
      </div>
    </div>
  );
};

export default AllGroup;

