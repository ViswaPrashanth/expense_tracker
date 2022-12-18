import React,{useContext} from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const {transactions,clearAllTransactions} = useContext(GlobalContext)
  const handleClick = e => {
    e.preventDefault();
    clearAllTransactions(transactions)
  }
 
  return (
    <>
      <div className="history-content">
        <h3>History</h3>
        <button onClick={handleClick}>Clear all</button>
      </div>
      <ul className="list">
        {transactions.map(transaction => (<Transaction transaction={transaction} key={transaction.id}/>))}
        
      </ul>
    </>
  );
};

export default TransactionList;
