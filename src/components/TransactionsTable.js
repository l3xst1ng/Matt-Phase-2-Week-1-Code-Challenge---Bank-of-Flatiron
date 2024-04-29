import React from "react";
import "./TransactionsTable.css";

// Displaying the transactions table
const TransactionsTable = ({ transactions }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>

            {/* added feature to change amount color based (red) positive or (green )negative */}
            <td style={{ color: transaction.amount >= 0 ? "green" : "red" }}>
              {transaction.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
