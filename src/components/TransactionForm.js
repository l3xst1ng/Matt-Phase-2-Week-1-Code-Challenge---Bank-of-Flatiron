import React, { useState } from "react";
import "./TransactionForm.css";

// Component for adding new transactions
const TransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount),
    };

    //Calling the onSubmit function with the new transaction
    onSubmit(newTransaction);
    resetForm();
  };

  // Function to reset the form fields
  const resetForm = () => {
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      {/*  component for user to pick a date*/}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="mm/dd/yyyy"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      {/* //submit button */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
