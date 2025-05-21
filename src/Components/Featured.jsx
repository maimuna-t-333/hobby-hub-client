
import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedCard from '../Components/FeaturedCard';

const Featured = () => {
    const hobbies = useLoaderData();
    console.log(hobbies);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-[#3A0519] mb-10">Featured Hobby Groups</h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {hobbies.map((hobby) => (
                    <FeaturedCard key={hobby._id} hobby={hobby} />
                ))}
            </div>
        </div>
    );
};

export default Featured;
