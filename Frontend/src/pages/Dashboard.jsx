import React, { useState } from "react";
import Header from "../components/Header";

const Dashboard = ({ onSignOut, user }) => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState(["Note1", "Note2"]);

  const handleCreateNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <>
      <Header onSignOut={onSignOut} />

      <div className="min-h-screen bg-gray-100 py-4 sm:py-6 px-4 sm:px-8 md:px-16">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            Welcome, {user?.name || "User"}!
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Email: {user?.email || "No email"}
          </p>
          {user?.dob && (
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Date of Birth: {formatDate(user.dob)}
            </p>
          )}
        </div>

        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
          <input
            type="text"
            placeholder="Enter your note..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full sm:w-64 lg:w-80 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            onKeyPress={(e) => e.key === "Enter" && handleCreateNote()}
          />
          <button
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
            onClick={handleCreateNote}
          >
            Create Note
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Your Notes ({notes.length})
          </h2>
          {notes.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">
                No notes yet. Create your first note above!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {notes.map((note, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 sm:p-4 rounded-lg transition duration-200 ease-in-out"
                >
                  <span className="text-gray-800 flex-1 mr-3 break-words">
                    {note}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-700 text-xl font-bold focus:outline-none transition duration-200 ease-in-out transform hover:scale-110"
                    onClick={() => handleDeleteNote(idx)}
                    title="Delete note"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional responsive features */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg shadow p-4 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-blue-600 font-medium">Total Notes</p>
                <p className="text-2xl font-bold text-blue-800">
                  {notes.length}
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-green-600 font-medium">Account Status</p>
                <p className="text-2xl font-bold text-green-800">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
