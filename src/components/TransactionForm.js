import React, { useState } from "react";
import "./TransactionForm.css";

const AddTransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...formData, id: Date.now() });
    setFormData({ date: "", description: "", category: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
