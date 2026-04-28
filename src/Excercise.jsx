import React from "react";
import UserCard from "./UserCard";
import { staticPosts } from "./dataPosts"; // Import data ES6

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-red-600">
        Post Cards
      </h1>

      {/* Grid: 1 kolom (HP), 3 kolom (Tablet), 5 kolom (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {staticPosts.map((post) => (
          <UserCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
