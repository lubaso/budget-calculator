import React, { FC, FormEventHandler } from "react";

export interface ExpenseFormProps {
  onSubmit: (expense: Expense) => void;
}

type Category = "taxes" | "fun";
export type Expense = {
  category: Category;
  value: number;
};

export const ExpenseForm: FC<ExpenseFormProps> = ({ onSubmit }) => {
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as any);
    const formAsObject = Object.fromEntries(formData.entries());
    onSubmit({ ...formAsObject, value: +formAsObject.value } as Expense);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Categoria</label>
      <select name="category" id="category">
        <option value="taxes">Impostos</option>
        <option value="fun">Diversão</option>
      </select>

      <label htmlFor="value">Valor</label>
      <input type="number" name="value" id="value" />
      <label htmlFor="date">Data</label>
      <input type="date" name="date" id="date" />
      <button type="submit">Enviar</button>
    </form>
  );
};
