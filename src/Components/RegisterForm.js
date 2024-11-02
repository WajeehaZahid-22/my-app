import React, { useState } from "react";
import { db } from "../config/firebase"; // Import the Firestore database instance
import { collection, addDoc } from "firebase/firestore";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disease, setDisease] = useState("");
  const [patientRecord, setPatientRecord] = useState("");
  const [role, setRole] = useState("patient"); // Default role
  const [specifications, setSpecifications] = useState("");
  const [information, setInformation] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Create a structured data object
    const data = {
      name,
      email,
      role,
      details: role === "doctor"
        ? {
            specifications,
            information,
            schedule,
          }
        : {
            phoneNumber,
            disease,
            patientRecord,
          },
    };

    console.log("Data to be saved:", JSON.stringify(data)); // Log the structured data object

    try {
      const docRef = await addDoc(collection(db, role), data);
      alert("Registration successful!" , docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error registering. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register Yourself
        </h2>
        <h3 className="text-lg mb-6 text-center">
          Register as a Doctor or Patient
        </h3>
        <div className="flex justify-around mb-4">
          <button
            onClick={() => setRole("doctor")}
            className={`px-4 py-2 rounded-md ${
              role === "doctor" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Doctor
          </button>
          <button
            onClick={() => setRole("patient")}
            className={`px-4 py-2 rounded-md ${
              role === "patient" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Patient
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Conditional Inputs for Doctors */}
          {role === "doctor" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="specifications"
                  className="block text-sm font-medium text-gray-700"
                >
                  Specifications:
                </label>
                <input
                  type="text"
                  id="specifications"
                  value={specifications}
                  onChange={(e) => setSpecifications(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="information"
                  className="block text-sm font-medium text-gray-700"
                >
                  Information:
                </label>
                <textarea
                  id="information"
                  value={information}
                  onChange={(e) => setInformation(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="schedule"
                  className="block text-sm font-medium text-gray-700"
                >
                  Schedule:
                </label>
                <input
                  type="text"
                  id="schedule"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Conditional Inputs for Patients */}
          {role === "patient" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="disease"
                  className="block text-sm font-medium text-gray-700"
                >
                  Disease:
                </label>
                <input
                  type="text"
                  id="disease"
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="patientRecord"
                  className="block text-sm font-medium text-gray-700"
                >
                  Patient Record:
                </label>
                <textarea
                  id="patientRecord"
                  value={patientRecord}
                  onChange={(e) => setPatientRecord(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
