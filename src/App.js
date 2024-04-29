import React, { useState } from "react";
import TransactionTable from "./components/TransactionsTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

// Defined the placeholder transactions data
function App() {
  const initialTransactions = [
    {
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000,
    },
    {
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
  ];
  const [transactions, setTransactions] = useState([...initialTransactions]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Function to handle search term changes
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter transactions based on search term using filter method
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div id="background-container">
        <h1 id="header-1">The Royal Bank of Flatiron</h1>
      </div>
      <div>
        <SearchBar onSearch={handleSearch} />
        <TransactionForm onSubmit={addTransaction} />
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default App;
