import React from 'react'

const Navbar = ({ category, handleCategoryChange }) => {
  return (
    <nav className="bg-gray-500 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold cursor-pointer">NewsPortal</div>
      <div>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="p-2 rounded bg-white text-black cursor-pointer"
        >
          <option value="">Category</option>
          <option value="business">Business</option>
          <option value="general">General</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar