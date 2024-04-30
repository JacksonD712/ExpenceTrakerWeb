import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
const AddbudgetForm = () => {
  const [Email, setEmail] = useState("");
  const [Time, setTime] = useState("");
  const [Budget, setBudget] = useState("");
  const [Work, setWork] = useState("");
  const [NumberOfChildren, setNumberOfChildren] = useState(0);
  const [Married, setMarried] = useState(false);
  const [setError] = useState("");
  const [budgetSaved, setBudgetSaved] = useState(false);
  const email = useSelector(state => state.auth.email);

  useEffect(() => {
    const checkBudgetSaved = async () => {
      try {
        const response = await fetch(
          `https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Expence?email=${email}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setBudgetSaved(true);
          }
        } else {
          console.error("Failed to fetch budget data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (email) {
      checkBudgetSaved();
    }
  }, [email]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (budgetSaved) {
      alert("You already have a budget. You can have only one budget.");
      return;
    }

    try {
      const response = await fetch(
        "https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Expence",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: email,
            Budget,
            Work,
            NumberOfChildren,
            Married,
            Time,
          }),
        }
      );

      if (response.ok) {
        setBudgetSaved(true);
        setBudget("");
        setWork("");
        setTime("");
        setNumberOfChildren(0);
        setMarried(false);
        setError("");
        alert("Budget data saved successfully!");
      } else {
        alert("Failed to save budget data!");
      }
    } catch (error) {}
  };
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-indigo-600 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Expence Tracker
          </h1>
          <p className="text-white mt-1">
            The most popular expence tracker website
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-00 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>

      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>{" "}
          <p className="text-sm font-normal text-gray-600 mb-7">
            Welcome Back {email}{" "}
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 640"
              x="0px"
              y="0px"
            >
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="number"
              placeholder="Your budget"
              value={Budget}
              onChange={e => setBudget(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 640"
              x="0px"
              y="0px"
            ></svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Time to spend (Days)"
              value={Time}
              onChange={e => setTime(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 640"
              x="0px"
              y="0px"
            ></svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Work"
              value={Work}
              onChange={e => setWork(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <p>Married?</p>
            <label htmlFor="yes-checkbox">Yes</label>
            <input
              type="checkbox"
              id="yes-checkbox"
              checked={Married}
              onChange={e => setMarried(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="no-checkbox">No</label>
            <input
              type="checkbox"
              id="no-checkbox"
              checked={!Married}
              onChange={e => setMarried(!e.target.checked)}
            />
          </div>
          {Married && (
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <p>Number of children</p>
              <input
                className="pl-2 outline-none border-none"
                type="number"
                placeholder="Number of children"
                value={NumberOfChildren}
                onChange={e => setNumberOfChildren(parseInt(e.target.value))}
              />
            </div>
          )}
          <button
            type="submit"
            className="block w-full bg-indigo-600 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded-2xl"
          >
            Save Budget
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddbudgetForm;
