import React, { useContext, useEffect, useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UserAuth } from "../../Context/UserContext";
import ConfirmationModal from "../../Components/ConfirmationModal";

const AllStudents = () => {
    const { userDelete } = useContext(UserAuth)

  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [deleteStudent, setDeleteStudent] = useState(null);

  const closeModal = () => {
    setDeleteStudent(null);
  };




  const url = `http://localhost:5000/students`;

  const {
    data: allStudents = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const res = await fetch(url)
      const data = await res.json();
  
      return data;
    },
  });



  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setStudents(data);
  //     console.log(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [url]);

// to delete a student
const handleDelete = (student) => {
    fetch(`http://localhost:5000/student/${student._id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`${student.firstName} Successfully Deleted!`);
            refetch();   
        }
      }) 
      .catch((e) => toast.error(e.message));
  };






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
            {allStudents.map((student, index) => (
              <tr 
              key={student._id + index}
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {student.firstName}
                </th>
                <td class="px-6 py-4">{student.classSelect}</td>
                <td class="px-6 py-4">{index + 1}</td>

                <td class="text-center flex justify-evenly py-4">
                  <Link
                  to={`/dashboard/view/${student._id}`}
                   className="hover:bg-[#a4a4a469] px-2 py-1  rounded-full">
                    <button className="font-medium text-gray-300 text-xl">
                      <FaEye />
                    </button>
                  </Link>
                  <Link
                  to={`/dashboard/edit/${student._id}`}
                   className="hover:bg-[#81ddff69] px-2 py-1  rounded-full">
                    <button
                      
                      className="font-medium text-cyan-500 text-xl"
                    >
                      <FaPencilAlt />
                    </button>
                  </Link>
                  <div className="hover:bg-[#a54c4c69] px-2 py-1  rounded-full">
                    <label
                    htmlFor="confirmation-modal"
                      onClick={() => setDeleteStudent(student)}
                      type="button"
                      className="font-medium text-red-600 text-xl"
                    >
                      <FaTrashAlt />
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
            deleteStudent && (
                <ConfirmationModal
                title={'xxx'}
                handleDeleteDoc={handleDelete}
                deleteDoc={deleteStudent}
                cancel={closeModal}
                />
            )
        }
      </div>
    </div>
  );
};

export default AllStudents;
