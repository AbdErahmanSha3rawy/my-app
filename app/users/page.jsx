"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const UsersPage = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <h1>Users page</h1>
      <form action="">
        <label htmlFor="id">id</label>
        <input 
          type="number"  
          id="id" 
          value={id} 
          onChange={(e) => { setId(e.target.value) }} 
          style={{ background: "white", color: "black" }} 
        />
      </form>
      <Link href={`/users/${id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View user Posts
        </button>
      </Link>
    </div>
  );
}

export default UsersPage;