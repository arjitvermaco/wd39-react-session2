import React, { useState } from "react";

export default function BasicForm() {
  let [firstName, setFirstName] = useState("Praveen");
  let [age,setAge] = useState("")

  let [userInfo,setUserInfo] = useState({
    firstName:"",
    age:""
  })
  return (
    <div>
      <h3 className="text-3xl text-center mt-16">
        Handling User Inputs via Form
      </h3>
      <h4 className="text-center">Value of First Name is : {userInfo.firstName}</h4>
      <h4 className="text-center">Value of Age is : {userInfo.age}</h4>
      <h3 className="text-center">{age > 18 ? "Allowed To Vote":"Not Allowed to vote"}</h3>
      <form>
        <div className="max-w-xl mx-auto">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            value={userInfo.firstName}
            onChange={(e) => {
              console.log(e);
              // setFirstName(e.target.value);
              setUserInfo({...userInfo,firstName:e.target.value})
            }}
            type="text"
            id="first_name"
            className="my-input"
            placeholder="John"
            required
          />

          <input
            value={userInfo.age}
            onChange={(e) => {
              setUserInfo({...userInfo,age:e.target.value})
            }}
            type="number"
            id="age"
            className="my-input"
            placeholder="Enter your age"
            required
          />
        </div>
      </form>
    </div>
  );
}
