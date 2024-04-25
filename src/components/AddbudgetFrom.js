// import React, {useEffect, useState} from "react";

// const AddbudgetForm = () => {
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     // Retrieve the email from local storage
//     const storedEmail = localStorage.getItem("email");
//     setEmail(storedEmail);
//   }, []); // Run this effect only once, when the component mounts

//   return (
//     <div class="h-screen md:flex">
//       <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
//         <div>
//           <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
//           <p class="text-white mt-1">
//             The most popular peer to peer lending at SEA
//           </p>
//           <button
//             type="submit"
//             class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
//           >
//             Read More
//           </button>
//         </div>
//         <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
//         <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
//         <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
//         <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
//       </div>
//       <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
//         <form class="bg-white">
//           <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
//           <p class="text-sm font-normal text-gray-600 mb-7">
//             Welcome Back {email}
//           </p>
//           <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//             <svg
//               class="h-5 w-5 text-gray-400"
//               xmlns="http://www.w3.org/2000/svg"
//               version="1.1"
//               viewBox="-5.0 -10.0 110.0 135.0"
//             >
//               <g fill-rule="evenodd">
//                 <path d="m22.535 79.543c-14.406 0-21.438-2.2891-21.73-2.3867-0.47656-0.16016-0.80078-0.60547-0.80078-1.1133v-46.906c0-0.79688 0.78516-1.3633 1.5391-1.1133 8.3125 2.7539 26.328 2.7109 40.18 1.0508 16.172-1.9414 37.523-2.3828 50.836-1.1016 0.60156 0.058594 1.0625 0.5625 1.0625 1.168v46.906c0 0.6875-0.59766 1.2305-1.2852 1.168-13.277-1.2578-34.23-0.83594-50.336 1.0977-6.832 0.82031-13.383 1.2344-19.465 1.2344zm16.078-9.1055c-6.375-3.0898-10.711-9.6484-10.711-17.035 0-6.4492 3.1875-12.082 8.0391-15.484-7.1953 0.61328-14.262 0.78516-21.234 0.34375-0.76953 3.1016-3.3359 5.4258-6.5 5.8945v19.34c2.6445 0.41406 6.5898 3.0859 6.7305 7.6055 7.7305 0.52344 15.891 0.16406 23.672-0.66406zm5.1055-35.695c0.67969-0.11328 1.3711-0.1875 2.0742-0.22656 12.266-1.2773 26.57-1.7539 39.309-1.1719l0.19531 0.007812h0.015625c0.45703 0.019532 0.89844 0.042969 1.3359 0.066407 0.42969 0.023437 0.79297 0.27344 0.98047 0.62891v0.003906l0.046875 0.09375 0.007813 0.023438v0.003906l0.03125 0.09375v0.003906l0.007812 0.023438c0.023438 0.089843 0.035156 0.1875 0.035156 0.28516v35.172c0 0.66797-0.5625 1.2031-1.2305 1.1719l-0.16797-0.007813-6.5312-0.21484c-0.066406 0-0.12891-0.007813-0.19141-0.019531-10.086-0.21484-20.777 0.14453-30.695 1.0117l-3.4414 0.32422c-1.4219 0.14453-2.8242 0.29688-4.2031 0.46484-6.6602 0.79688-12.953 1.2031-18.699 1.2031-4.875 0-10.836-0.32812-15.766-1.1445-0.56641-0.09375-0.98047-0.58203-0.98047-1.1562v-35.152c0-0.027344 0.003907-0.054688 0.003907-0.082031l0.007812-0.078126c0.003907-0.023437 0.007813-0.050781 0.011719-0.074218 0.003906-0.023438 0.011719-0.046875 0.015625-0.070313 0.007813-0.023437 0.011719-0.042969 0.019531-0.066406 0.007813-0.019531 0.015625-0.042969 0.023438-0.0625 0.007812-0.019531 0.015625-0.039063 0.027344-0.058594 0.007812-0.019531 0.019531-0.039062 0.03125-0.054687 0.011718-0.019532 0.019531-0.035156 0.03125-0.050782 0.011718-0.015624 0.023437-0.03125 0.035156-0.046874 0.011718-0.015626 0.027344-0.03125 0.039062-0.046876 0.011719-0.015624 0.027344-0.027343 0.042969-0.042968s0.03125-0.027344 0.046875-0.039063l0.046875-0.035156c0.015625-0.011719 0.035156-0.023437 0.050781-0.035156l0.054688-0.03125 0.054687-0.027344 0.058594-0.027344 0.0625-0.023437c0.019531-0.007813 0.042969-0.015625 0.0625-0.019532l0.066406-0.019531 0.14062-0.03125 0.14844-0.023437 0.15625-0.015625 0.16406-0.007813h0.17188l0.26953 0.011719 0.28125 0.023437 0.097657 0.007813 0.19531 0.023437 0.30469 0.035157 0.10156 0.015625 0.73828 0.10938 0.875 0.125 0.32813 0.035156 0.10547 0.011719c1.0703 0.10938 2.2227 0.074218 3.043 0.26562 9.2461 0.67188 18.973 0.19922 28.641-0.96094 0.42969-0.050781 0.86328-0.10156 1.2969-0.15234zm10.754 1.3711c6.6211 2.9453 11.25 9.5859 11.25 17.289 0 6.1836-2.9883 11.824-7.8047 15.316 6.9141-0.375 13.945-0.50391 20.805-0.37891 0.44141-2.3945 2.793-5.8125 6.6953-6.3945v-19.527c-4.1445-0.60938-6.4492-4.3906-6.75-6.9219-8.0078-0.14844-16.273 0.070312-24.195 0.62109zm-7.6602 0.72266c-0.30469 0-0.60938 0.007812-0.91016 0.023437-0.60938 0.0625-1.2188 0.12891-1.8203 0.19922-7.8047 1.2891-13.836 8.0078-13.836 16.344 0 8.1719 6.0586 15.188 14.113 16.387 2.5781-0.27344 5.2109-0.51562 7.8359-0.71094 6.6953-2.2969 11.184-8.5781 11.184-15.672 0-9.1367-7.4297-16.566-16.566-16.566zm34.297-1.2812c0.39062 2.2266 2.1094 4.0039 4.3086 4.4766v-4.3242l-0.88672-0.039062-0.0625-0.003907-0.26562-0.015624c-0.97656-0.039063-2.0078-0.070313-3.0977-0.097657zm4.3086 32.98v-4.2188c-2.0703 0.4375-3.7109 2.0195-4.2227 4.0703 1.418 0.039062 2.8281 0.085937 4.2227 0.14453zm-77.211 1.8555 4.3711 0.51172c-0.21484-2.4453-2.0195-4.4414-4.3672-4.9492v4.4375zm0.003907-28.617c1.9297-0.41016 3.4961-1.8164 4.1094-3.6836l-0.26953-0.027344c-1.2773-0.10938-2.5508-0.24219-3.8203-0.39453h-0.015625v4.1094zm37.41 0.27734c0.007812-0.28125 0.019531-0.55859 0.019531-0.8125 0-1.543 2.3438-1.543 2.3438 0 0 0.25391 0.011719 0.53125 0.019531 0.80859 4.8477 0.93359 6.5273 7.3711 3.9531 7.3711-0.64453 0-1.1719-0.52344-1.1719-1.1719 0-5.2266-7.9414-5.2266-7.9414 0 0 2.8594 1.4531 3.3398 4.2422 4.0039 2.5508 0.60547 6.043 1.4375 6.043 6.2812 0 3.0742-2.207 5.6406-5.1211 6.1992 0.011719 1.0117-0.10937 1.9844-1.1992 1.9844s-1.2109-0.97266-1.1992-1.9844c-4.8438-0.9375-6.5195-7.3711-3.9453-7.3711 0.64844 0 1.1719 0.52734 1.1719 1.1719 0 5.2266 7.9414 5.2266 7.9414 0 0-2.8594-1.4531-3.3398-4.2422-4.0039-2.5508-0.60547-6.043-1.4375-6.043-6.2812 0-3.0742 2.207-5.6406 5.1211-6.1992z" />
//                 <path d="m98.828 70.426-2.8633-0.1875v-41.102c0-1.8125-1.3789-3.3281-3.1836-3.5-4.7422-0.45312-9.5508-0.63281-14.312-0.70312-5.5-0.078125-11.008 0.007812-16.5 0.23438-6.8438 0.28125-13.723 0.76172-20.523 1.5781-4.2422 0.50781-8.5195 0.83203-12.789 1.0039-5.0273 0.19922-10.125 0.20703-15.145-0.14062-2.2344-0.15625-4.7383-0.38281-7.1328-0.80859v-4.4531c0-0.79688 0.78516-1.3633 1.5391-1.1133 0.066406 0.023437 7.0195 2.2656 20.996 2.2656 5.9922 0 12.449-0.41016 19.188-1.2188 16.172-1.9414 37.523-2.3828 50.836-1.1016 0.60156 0.058593 1.0625 0.5625 1.0625 1.168v46.906c0 0.64453-0.52734 1.1719-1.1719 1.1719z" />
//               </g>
//             </svg>
//             <input
//               class="pl-2 outline-none border-none"
//               type="text"
//               name=""
//               id=""
//               placeholder="Your budget"
//             />
//           </div>
//           <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//             <svg viewBox="0 0 100 125" class="h-5 w-5 text-gray-400">
//               <path d="M90.3,33.9c0-4.4-3.6-8-8-8H66.2v-5.1c0-3.7-3-6.6-6.6-6.6H40.5c-3.7,0-6.6,3-6.6,6.6v5.1H17.7c-4.4,0-8,3.6-8,8v27.6  c0,1.7,0.7,3.3,1.9,4.5v14.6c0,2.9,2.4,5.3,5.3,5.3h66.2c2.9,0,5.3-2.4,5.3-5.3V66c1.1-1.2,1.9-2.7,1.9-4.5V33.9z M59.5,18.1  c0.7,0,1.3,0.2,1.7,0.6H38.8c0.5-0.4,1.1-0.6,1.7-0.6H59.5z M37.8,22.7h24.3v3.1H37.8V22.7z M13.7,33.9c0-2.2,1.8-4,4-4h64.6  c2.2,0,4,1.8,4,4v27.6c0,1.2-0.9,2.2-2.1,2.4l-28.1,2.9v-4.4c0-1.9-1.5-3.4-3.4-3.4h-5.4c-1.9,0-3.4,1.5-3.4,3.4v4.4l-28.1-2.9  c-1.2-0.1-2.1-1.1-2.1-2.4V33.9z M52.1,63v9.7h-4.2V63H52.1z M83.1,81.9H16.9c-0.7,0-1.3-0.6-1.3-1.3V67.9l28.3,3v2.5  c0,1.9,1.5,3.4,3.4,3.4h5.4c1.9,0,3.4-1.5,3.4-3.4v-2.5l28.3-3v12.8C84.4,81.3,83.8,81.9,83.1,81.9z" />
//             </svg>
//             <input
//               class="pl-2 outline-none border-none"
//               type="text"
//               name=""
//               id=""
//               placeholder="Work"
//             />
//           </div>

//           </div>

//           <button
//             type="submit"
//             class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default AddbudgetForm;
import React, { useEffect, useState } from "react";

const AddbudgetForm = () => {
  const [Email, setEmail] = useState("");
  const [Time, setTime] = useState("");
  const [Budget, setBudget] = useState("");
  const [Work, setWork] = useState("");
  const [NumberOfChildren, setNumberOfChildren] = useState(0);
  const [Married, setMarried] = useState(false);
  const [ setError] = useState("");
  const [budgetSaved, setBudgetSaved] = useState(false);

  useEffect(() => {

    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  useEffect(() => {

    const checkBudgetSaved = async () => {
      try {
        const response = await fetch(
          `https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Expence?email=${Email}`
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

    if (Email) {
      checkBudgetSaved();
    }
  }, [Email]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (budgetSaved) {
    alert("You already have a budget. You can have only one budget.");
    return;
  }

  // POST request to save budget data
  try {
    const response = await fetch(
      "https://65fef466b2a18489b386cd90.mockapi.io/api/v1/Expence",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email,
          Budget,
          Work,
          NumberOfChildren,
          Married,
          Time
        }),
      }
    );

    if (response.ok) {
      setBudgetSaved(true); // Setting budgetSaved to true after successful save
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
  } catch (error) {
   
  }
};
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-sky-300 to-sky-100 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Expence Tracker</h1>
          <p className="text-white mt-1">
            The most popular expence tracker website 
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-sky-300 mt-4 py-2 rounded-2xl font-bold mb-2"
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
            Welcome Back {Email}{" "}
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
              {/* Your existing SVG content */}
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
            >
              {/* Your existing SVG content */}
            </svg>
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
            >
              {/* Your existing SVG content */}
            </svg>
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
            className="block w-full bg-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          >
            Save Budget
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddbudgetForm;
