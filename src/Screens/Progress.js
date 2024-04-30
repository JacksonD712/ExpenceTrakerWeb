import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
function Progress() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState([]);
  const [numberOfDays, setNumberOfDays] = useState(0);

  const [selectedDay, setSelectedDay] = useState(1);

  const email = useSelector(state => state.auth.email);

  useEffect(() => {
    if (email) {
      fetchExpenses();
      fetchBudget();
    }
  }, [email]);

  const fetchExpenses = () => {
    fetch(
      `https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Expence?Email=${email}`
    )
      .then(response => response.json())
      .then(data => {
        setExpenses(data);
        const maxTimeExpense = Math.max(...data.map(expense => expense.Time));
        setNumberOfDays(maxTimeExpense);
      })
      .catch(error => console.error("Error fetching expenses:", error));
  };

  const fetchBudget = () => {
    fetch(
      `https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Exp?Email=${email}`
    )
      .then(response => response.json())
      .then(data => {
        setBudget(Array.isArray(data) ? data : []);
      })
      .catch(error => console.error("Error fetching budget:", error));
  };

  const handleDayChange = e => {
    setSelectedDay(parseInt(e.target.value));
  };

  return (
    <>
      <section className="bg-indigo-600 h-64">
        <div className="text-white mx-auto p-4 sm:p-8 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-light">Add Expenses</h2>
          <ul>
            {Array.isArray(expenses) &&
              expenses.length > 0 &&
              expenses.map(expense => (
                <div key={expense.id}>
                  <p className="text-white mt-3">
                    {expense.Work} : {email}
                  </p>
                  <p className="text-white mt-3">
                    <strong>Budget:</strong> {expense.Budget}$
                  </p>
                  <p className="text-white mt-3">
                    <strong>Children:</strong> {expense.NumberOfChildren}
                  </p>
                  <p className="text-white mt-3">
                    <strong>Time to spend:</strong> {expense.Time}
                  </p>
                </div>
              ))}
          </ul>
        </div>
      </section>

      <div className="mt-4 mx-auto max-w-4xl">
        <label htmlFor="daySelect" className="block text-lg font-semibold">
          Select Day:
        </label>
        <select
          id="daySelect"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          onChange={handleDayChange}
          value={selectedDay}
        >
          {[...Array(numberOfDays)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              Day {index + 1}
            </option>
          ))}
        </select>
      </div>

      <section className="flex flex-wrap mt-11">
        {budget
          .filter(exp => exp.Day === selectedDay)
          .map((exp, index) => (
            <div key={index} className="flex-1 max-w-md m-2">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-lg font-semibold">Day {selectedDay}</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div key={index}>
                    <p>Category: {exp.Categories}</p>
                    <p>Price: {exp.Price}$</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}

export default Progress;
