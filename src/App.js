import React, { useState } from "react";
import TransactionTable from "./TransactionsTable";
import AddTransactionForm from "./AddTransactionForm";
import SearchBar from "./SearchBar";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000,
    },
    {
      id: 2,
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    // Add more sample transactions
  ]);
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
      <AddTransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
