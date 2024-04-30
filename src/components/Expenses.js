import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import image1 from "../assets/money.png";
function AddExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [numberOfDays, setNumberOfDays] = useState(0);

  const [selectedDay, setSelectedDay] = useState(1);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const email = useSelector(state => state.auth.email);

  useEffect(() => {
    if (email) {
      fetchExpenses();
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

  const submitExpense = event => {
    event.preventDefault();
    fetch(
      `https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Exp?Email=${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Categories: category,
          Price: parseInt(price),
          Day: selectedDay,
          Email: email,
        }),
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log("Expense added:", data);
        setCategory("");
        setPrice("");
      })
      .catch(error => console.error("Error adding expense:", error));
  };

  return (
    <>
      <section className="bg-indigo-600  h-64">
        <div className="text-white mx-auto p-4 sm:p-8 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-light">Add Expenses</h2>
          <ul>
            {Array.isArray(expenses) &&
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

      <section className="flex justify-center items-center py-10 max-h-screen">
        <div className="font-[sans-serif] bg-indigo-600 text-[#333]h-screen">
          <div className="  items-center justify-center lg:p-6 p-4">
            <div className="font-[sans-serif] text-[#333]  items-center  md:h-screen p-4">
              <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl rounded-md p-6 bg-white max-w-full">
                <div className="grid md:grid-cols-2 items-center gap-8">
                  <div className="max-md:order-1">
                    <img
                      src={image1}
                      loading="lazy"
                      alt=""
                      className="w-90 h-90 m-2"
                    />
                  </div>
                  <form className="max-w-md w-full mx-auto">
                    <div className="mb-12">
                      <h3 className="text-4xl font-extrabold text-indigo-600">
                        Add Expence
                      </h3>
                    </div>
                    <div>
                      <div className="relative mb-10">
                        <select
                          value={selectedDay}
                          onChange={e =>
                            setSelectedDay(parseInt(e.target.value))
                          }
                          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {[...Array(numberOfDays)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                              Day {index + 1}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 12l-6-6H5V3H1l4.5 4.5L10 10l4.5-4.5L19 3h-4v3h-1.001l-6 6z" />
                          </svg>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <input
                          type="number"
                          placeholder="Price"
                          value={price}
                          onChange={e => setPrice(e.target.value)}
                          className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          placeholder="Category"
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-6"></div>
                    <div className="mt-12">
                      <button
                        onClick={submitExpense}
                        className="bg-indigo-600 text-white rounded-md px-4 py-2 ml-4 shadow-xlfont-semibold  py-2.5 px-4 w-full "
                      >
                        Add Expense
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddExpenses;
