import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AllStudents = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setStudents(data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return (
    <div className="rounded-md shadow-sm bg-gray-800 p-10 lg:px-20">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Student name
              </th>
              <th scope="col" class="px-6 py-3">
                Class
              </th>
              <th scope="col" class="px-6 py-3">
                Roll No.
              </th>

              <th scope="col" class="text-center flex justify-evenly py-3">
                <td>View</td>
                <td>Edit</td>
                <td>Delete</td>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr 
              key={student.id + index}
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {student.name}
                </th>
                <td class="px-6 py-4">Sliver</td>
                <td class="px-6 py-4">Laptop</td>

                <td class="text-center flex justify-evenly py-4">
                  <Link
                  to={`/dashboard/view/${student.id}`}
                   className="hover:bg-[#a4a4a469] px-2 py-1  rounded-full">
                    <button className="font-medium text-gray-300 text-xl">
                      <FaEye />
                    </button>
                  </Link>
                  <Link
                  to={`/dashboard/edit/${student.id}`}
                   className="hover:bg-[#81ddff69] px-2 py-1  rounded-full">
                    <button
                      href="#"
                      className="font-medium text-cyan-500 text-xl"
                    >
                      <FaPencilAlt />
                    </button>
                  </Link>
                  <div className="hover:bg-[#a54c4c69] px-2 py-1  rounded-full">
                    <button
                      // onClick={() => handleRemove(product._id)}
                      type="button"
                      className="font-medium text-red-600 text-xl"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
