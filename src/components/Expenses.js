import React, { useState, useEffect } from "react";

function AddExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  useEffect(() => {
    if (email) {
      fetchExpenses();
    }
  }, [email]);

  const fetchExpenses = () => {
    fetch(`https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Expence?Email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
        const maxTimeExpense = Math.max(...data.map((expense) => expense.Time));
        setNumberOfDays(maxTimeExpense);
      })
      .catch((error) => console.error("Error fetching expenses:", error));
  };

  const submitExpense = (dayNumber, category, price) => {
    fetch(`https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Exp?Email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Categories: category,
        Price: price,
        Day: dayNumber,
        Email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Expense added:", data);
        // After adding expense, refetch the updated expenses
        fetchExpenses();
      })
      .catch((error) => console.error("Error adding expense:", error));
  };

  return (
    <>
      <section className="bg-gradient-to-tr from-sky-300 to-sky-100 h-64">
        <div className="text-white mx-auto p-4 sm:p-8 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-light">Add Expenses</h2>
          <ul>
          {Array.isArray(expenses) && expenses.map((expense) => (
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

      <section className="flex flex-wrap">
        {[...Array(Math.ceil(numberOfDays / 5))].map((_, setIndex) => (
          <div key={setIndex} className="flex flex-wrap w-full">
            {[...Array(5)].map((_, index) => {
              const dayNumber = setIndex * 5 + index + 1;
              return dayNumber <= numberOfDays ? (
                <div key={dayNumber} className="flex-1 max-w-md m-2">
                  <div className="relative py-3 sm:max-w-md sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-sky-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-8 bg-white shadow-lg sm:rounded-3xl sm:p-10">
                      <div className="max-w-md mx-auto">
                        <div>
                          <h1 className="text-lg font-semibold">
                            Day {dayNumber}
                          </h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="py-6 text-sm leading-6 space-y-2 text-gray-700 sm:text-base sm:leading-7">
                            <div className="relative">
                              <input
                                autoComplete="off"
                                id={`category-${dayNumber}`}
                                name={`category-${dayNumber}`}
                                type="text"
                                className="peer h-8 w-full border-b-2 border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-rose-600"
                                placeholder="Category"
                              />
                            </div>
                            <div className="relative">
                              <input
                                autoComplete="off"
                                id={`price-${dayNumber}`}
                                name={`price-${dayNumber}`}
                                type="number"
                                className="peer  h-8 w-full border-b-2 border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-rose-600"
                                placeholder="Price"
                              />
                            </div>
                            <div className="relative">
                              <button
                                onClick={() => {
                                  const categoryInput = document.getElementById(
                                    `category-${dayNumber}`
                                  );
                                  const priceInput = document.getElementById(
                                    `price-${dayNumber}`
                                  );
                                  if (
                                    categoryInput &&
                                    priceInput &&
                                    categoryInput.value &&
                                    priceInput.value
                                  ) {
                                    submitExpense(
                                      dayNumber,
                                      categoryInput.value,
                                      parseInt(priceInput.value)
                                    );
                                    categoryInput.value = "";
                                    priceInput.value = "";
                                  }
                                }}
                                className="bg-sky-500 text-white rounded-md px-2 py-1 text-xs"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        ))}
      </section>
    </>
  );
}

export default AddExpenses;
