import React from "react";
import { useLoaderData } from "react-router-dom";
const ViewStudent = () => {

  const student = useLoaderData();


  return (
    <div>
      <h1>Student Details: {student.firstName}</h1>
      <form>
        <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm bg-gray-800 p-10 lg:px-20">
          <div className="grid grid-cols-6 py-8 gap-4 col-span-full lg:col-span-4 ">
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                defaultValue={student.firstName}
                disabled
                placeholder="First Name"
                className="w-full rounded-sm p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="middleName"
                name="middleName"
                type="text"
                defaultValue={student.middleName}
                disabled
                placeholder="Middle Name"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                defaultValue={student.lastName}
                disabled
                placeholder="Last Name"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <select
                name="classSelect"
                defaultValue={student.classSelect}
                disabled
                className="select w-full"
              >
                <option disabled selected>
                  Select Class
                </option>
                {["class 1", "Class 2", "Class 3"].map((e, i) => (
                  <option
                    className="text-white text-[14px]"
                    key={e + i}
                    value={e}
                  >
                    {e}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <select
                name="divisionSelect"
                defaultValue={student.divisionSelect}
                disabled
                className="select w-full"
              >
                <option disabled selected>
                  Select Division
                </option>
                {["Rajshahi", "Dhaka", "Chattagram"].map((e, i) => (
                  <option
                    className="text-white text-[14px]"
                    key={e + i}
                    value={e}
                  >
                    {e}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="contact"
                name="contact"
                type="number"
                defaultValue={student.contact}
                disabled
                placeholder="+880"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>

            <div className="col-span-full sm:col-span-3 mt-8">
              <input
                id="address1"
                name="address1"
                type="text"
                defaultValue={student.address1}
                disabled
                placeholder="Address 1"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-3 mt-8">
              <input
                id="address2"
                name="address2"
                type="text"
                defaultValue={student.address2}
                disabled
                placeholder="Address 2"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="street"
                name="street"
                type="text"
                defaultValue={student.street}
                disabled
                placeholder="Street"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="city"
                name="city"
                type="text"
                defaultValue={student.city}
                disabled
                placeholder="City"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="zip"
                name="zip"
                defaultValue={student.zip}
                disabled
                type="number"
                placeholder="Zip"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-200"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ViewStudent;
