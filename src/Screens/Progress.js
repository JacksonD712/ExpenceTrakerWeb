import React, {useState, useEffect} from "react";

function AddExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [exp, setExp] = useState([]);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

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
        setExp(Array.isArray(data) ? data : []);
      })
      .catch(error => console.error("Error fetching budget:", error));
  };

  return (
    <>
      <section className="bg-gradient-to-tr from-sky-300 to-sky-100 h-64">
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
      {Array.isArray(expenses) &&
        expenses.length > 0 &&
        expenses.map(expense => (
          <section className="flex flex-wrap mt-11" key={expense.id}>
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
                              {exp
                                .filter(exp => exp.Day === dayNumber)
                                .map((Exp, index) => (
                                  <div key={index}>
                                    <p>Category: {Exp.Categories}</p>
                                    <p>Price: {Exp.Price}$</p>
                                  </div>
                                ))}
                              <p>
                                Budget in Day: {expense.Budget / expense.Time} $
                              </p>
                              <p>
                                Total Price for the day:{" "}
                                {exp.reduce(
                                  (acc, exp) =>
                                    exp.Day === dayNumber
                                      ? acc + exp.Price
                                      : acc,
                                  0
                                )}{" "}
                                $
                              </p>
                              <p>
                                {" "}
                                Remaining:{" "}
                                {expense.Budget / expense.Time -
                                  exp.reduce(
                                    (acc, exp) =>
                                      exp.Day === dayNumber
                                        ? acc + exp.Price
                                        : acc,
                                    0
                                  )}{" "}
                                ${" "}
                              </p>
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
        ))}
    </>
  );
}

export default AddExpenses;
