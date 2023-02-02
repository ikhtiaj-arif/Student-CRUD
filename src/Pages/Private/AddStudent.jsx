import React from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from 'react-router-dom';



const AddStudent = () => {

  const navigate = useNavigate();

  const handleAddProduct = (event) => {
    event.preventDefault();
// get input values
    const form = event.target;
    const firstName = form.firstName.value;
    const middleName = form.middleName.value;
    const lastName = form.lastName.value;
    const classSelect = form.classSelect.value;
    const divisionSelect = form.divisionSelect.value;
    const contact = form.contact.value;
    const address1 = form.address1.value;
    const address2 = form.address2.value;
    const street = form.street.value;
    const city = form.city.value;
    const zip = form.zip.value;
    // put input value in object
    const studentDetails = {
      firstName,
      middleName,
      lastName,
      classSelect,
      divisionSelect,
      contact,
      address1,
      address2,
      street,
      city,
      zip
    }
    console.log(studentDetails);

    fetch("http://localhost:5000/student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("booking confirmed!");
          navigate("/dashboard/allStudents");
        }
      });
  
 
    
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm bg-gray-800 p-10 lg:px-20">
          <div className="grid grid-cols-6 py-8 gap-4 col-span-full lg:col-span-4 ">
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full rounded-sm p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="middleName"
                name="middleName"
                type="text"
                placeholder="Middle Name"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <select name="classSelect" className="select w-full">
                <option disabled selected>
                  Select Class
                </option>
                {["class 1", "Class 2", "Class 3"].map((e,i) => (
                <option className="text-white text-[14px]"
                key={e+i} value={e}>
                  {e}
                </option>
              ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <select name="divisionSelect" className="select w-full">
                <option disabled selected>
                 Select Division
                </option>
                {["Rajshahi", "Dhaka", "Chattagram"].map((e, i) => (
                <option
                className="text-white text-[14px]"
                key={e+i} value={e}>
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
                placeholder="+880"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3 mt-8">
              <input
                id="address1"
                name="address1"
                type="text"
                placeholder="Address 1"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3 mt-8">
              <input
                id="address2"
                name="address2"
                type="text"
                placeholder="Address 2"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="street"
                name="street"
                type="text"
                placeholder="Street"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <input
                id="zip"
                name="zip"
                type="number"
                placeholder="Zip"
                className="w-full rounded-sm p-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
          </div>

          <div className="col-span-2 ">
            <button type="submit" className="btn btn-success w-full">
              ADD Student
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddStudent;
