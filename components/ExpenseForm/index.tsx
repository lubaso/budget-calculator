import React, { FC, FormEventHandler } from "react";

export interface ExpenseFormProps {
  onSubmit: () => void;
}

export const ExpenseForm: FC<ExpenseFormProps> = ({ onSubmit }) => {
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Categoria</label>
      <select name="category" id="category">
        <option value="taxed">Impostos</option>
        <option value="fun">Diversão</option>
      </select>
      <button type="submit">Enviar</button>
    </form>
  );
};
