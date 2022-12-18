import React,{useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(null)

  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text, 
      amount: +amount
    }

    addTransaction(newTransaction);
    setText('')
    setAmount('')
    
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number"  value={amount == null ? '' : amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button  className="btn">Add transaction</button>
      </form>        
      <button className="btn" onClick={window.print}>Download</button>

    </>
  );
};

export default AddTransaction;

//component level state and controlled components within the form are done in the above code
