import React from 'react';

const EditStudent = () => {

    
    const handleUpdateProduct = () => {

    }

    return (
        <div>
        <form onSubmit={handleUpdateProduct}>
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
                <select name="category" className="select w-full">
                  <option disabled selected>
                    Chose The Category
                  </option>
                  {/* {categories.map((e) => (
                  <option key={e._id} value={e.title}>
                    {e.title}
                  </option>
                ))} */}
                </select>
              </div>
              <div className="col-span-full sm:col-span-3 md:col-span-2">
                <select name="category" className="select w-full">
                  <option disabled selected>
                    Chose The Category
                  </option>
                  {/* {categories.map((e) => (
                  <option key={e._id} value={e.title}>
                    {e.title}
                  </option>
                ))} */}
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

export default EditStudent;