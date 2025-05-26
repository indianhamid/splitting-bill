import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [billValue, setBillValue] = useState(0);
  let [yourExpense, setYourExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("you");
  let friendExpense = billValue ? billValue - yourExpense : 0;

  const handleSplit = (e) => {
    e.preventDefault();
    if (!billValue || !yourExpense) return;
    onSplitBill(whoIsPaying === "you" ? friendExpense : -yourExpense);
  };

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>🧍 Your Expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? yourExpense
              : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>💲 Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button handleBtn={handleSplit}>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
