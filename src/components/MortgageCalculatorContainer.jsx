import React, { useState } from "react";
import "./MortgageCalculatorContainer.css";

export default function MortgageCalculatorContainer() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestrate, setInterestRate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const calcMortgate = () => {
    if (selectedOption === "repayment") {
      let r = interestrate / 12;
      let n = mortgageTerm * 12;
      let res = mortgageAmount * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
      setResult(res);
      clearAllInputs();
    } else {
      let r = interestrate / 12;
      let res = mortgageAmount * r;
      setResult(res);
      clearAllInputs;
    }
  };

  const clearAllInputs = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
  };

  return (
    <div className="flex flex-col lg:flex-row mortgage-container w-4/5 mx-auto rounded-tr-3xl rounded-l-3xl">
      <div className="w-1/2 bg-slate-50 p-10">
        <div className="flex items-center justify-between gap-5 mb-5">
          <h3>Mortgage Calculator</h3>
          <small className="underline" onClick={clearAllInputs}>
            Clear All
          </small>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 font-thin">
            Mortgage Amount
          </label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <span className="text-gray-500">$</span>
            <input
              type="text"
              className="ml-2 w-full focus:outline-none bg-transparent"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="sm:col-span-3">
            <label
              for="first-name"
              className="block text-sm leading-6 text-gray-900 font-thin"
            >
              Mortgage Term
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={mortgageTerm}
                autocomplete="given-name"
                onChange={(e) => setMortgageTerm(e.target.value)}
                className="block w-full bg-transparent rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              for="last-name"
              className="block text-sm leading-6 text-gray-900 font-thin"
            >
              Interest Rate
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={interestrate}
                autocomplete="family-name"
                onChange={(e) => setInterestRate(e.target.value / 100)}
                className="block w-full bg-transparent rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-6">
          <legend className="text-sm font-thin leading-6 text-gray-900">
            Mortgage Type
          </legend>
          <div className="flex items-center gap-x-3 p-2 rounded mortgage-type__item">
            <input
              id="push-everything"
              name="push-notifications"
              type="radio"
              value={"repayment"}
              checked={selectedOption === "repayment"}
              onChange={handleChange}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-everything"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Repayment
            </label>
          </div>
          <div className="flex items-center gap-x-3 p-2 rounded mortgage-type__item">
            <input
              id="push-email"
              name="push-notifications"
              type="radio"
              value={"interest"}
              checked={selectedOption === "interest"}
              onChange={handleChange}
              className="h-4 w-4 border-gray-300 text-indigo-600 checked:border-transparent"
            />
            <label
              htmlFor="push-email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Interest Only
            </label>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6"
          onClick={calcMortgate}
        >
          Calculate Repayments
        </button>
      </div>
      <div className="w-1/2 bg-green-dark p-10 rounded-bl-3xl rounded-tr-3xl rounded-l-3xl flex items-center flex-col text-white">
        <dotlottie-player
          src="https://lottie.host/1d52056c-9501-4cf1-9624-6f014c7c423d/zxImhf8IXP.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
        {!result && <h2 className="font-bold">Results shown here</h2>}
        {!result && (
          <p className="text-gray-500 text-center">
            Complete the form and click "calculate repayments" to see what
            monthly repaments would be.
          </p>
        )}
        {result && <h2 className="font-bold mb-2">Your Results</h2>}
        {result && (
          <p className="text-gray-500 text-center">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
        )}
        {result && (
          <h1 className="mt-4 font-bold result-text">
            ${result.toLocaleString()}
          </h1>
        )}
      </div>
    </div>
  );
}
