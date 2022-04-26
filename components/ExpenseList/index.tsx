import { FC } from "react";
import { Expense } from "../ExpenseForm";

export interface ExpenseListProps {
  expenses: Expense[];
}
export const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <ol>
      {expenses.map(({ category, value, date }, index) => (
        <li key={index}>
          {value} em {category} na {date}
        </li>
      ))}
    </ol>
  );
};
