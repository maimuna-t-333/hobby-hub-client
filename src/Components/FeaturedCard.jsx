import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const FeaturedCard = ({ hobby }) => {
    return (
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="relative">
                <img
                    src={hobby.imageUrl}
                    alt={hobby.groupName}
                    className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end">
                    <h2 className="text-xl font-bold text-white drop-shadow-md">
                        {hobby.groupName}
                    </h2>
                </div>
            </div>
            <div className="p-5 space-y-3">
                <span className="text-sm text-[#944E63] font-semibold bg-[#FFD0D0] px-2 py-1 rounded ">
                    {hobby.hobbyCategory}
                </span>

                <p className="flex items-center gap-1 text-gray-600 text-sm mt-4">
                    <FaMapMarkerAlt className="text-[#944E63]" />
                    {hobby.location}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed">
                    {hobby.description.slice(0, 100)}...
                </p>

                <div className="pt-3">
                    <Link to='/group/:id'>
                    <button className="px-4 py-2 rounded-full bg-[#987070] text-white text-sm hover:bg-[#944E63] transition">
                        View Details
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;

