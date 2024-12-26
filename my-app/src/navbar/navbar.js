import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between">
        <span className="text-xl font-bold text-gray-700">Kelas React</span>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/tugas6"
              className="text-gray-700 hover:text-blue-500"
            >
              Tugas 6
            </Link>
          </li>
          <li>
            <Link
              to="/tugas7"
              className="text-gray-700 hover:text-blue-500"
            >
              Tugas 7
            </Link>
          </li>
          <li>
            <Link
              to="/tugas8"
              className="text-gray-700 hover:text-blue-500"
            >
              Tugas 8
            </Link>
          </li>
          <li>
            <Link
              to="/tugas9"
              className="text-gray-700 hover:text-blue-500"
            >
              Tugas 9
            </Link>
          </li>
          <li>
            <Link
              to="/tugas10"
              className="text-gray-700 hover:text-blue-500"
            >
              Tugas 10
            </Link>
          </li>
          <li>
            <Link
              to="/tugas11"
              className="text-gray-700 hover:text-blue-500"
            >
              Tugas 11
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;