import React, { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";

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
      <div id="background-container">
        <h1 id="header-1">The Royal Bank of Flatiron</h1>
      </div>
      <div>
        <SearchBar onSearch={handleSearch} />
        <TransactionsTable transactions={filteredTransactions} />
        <TransactionForm addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default App;
