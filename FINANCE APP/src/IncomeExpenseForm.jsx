import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "./actions";

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const handleIncome = () => {
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };

  const handleExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncome}>Add Income</button>
      <button onClick={handleExpense}>Add Expense</button>
    </div>
  );
};
export default IncomeExpenseForm;
