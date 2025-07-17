import { useSelector } from "react-redux";

const FinanceSummary = () => {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  return (
    <div>
      <h1>Finance Summary</h1>
      <p>Income: ${income}</p>
      <p>Expense: ${expense}</p>
      <p>Balance: ${income - expense}</p>
    </div>
  );
};
export default FinanceSummary;
