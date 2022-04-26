import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Expense } from "../../components/ExpenseForm";
import { ExpenseList } from "../../components/ExpenseList";

const ExpensesPage: NextPage = () => {
  /**
   * Forma de ter na memória as exepnses
   *
   * Isso é um hook de react
   */
  const [savedExpenses, setSavedExpenses] = useState<Expense[]>([]);

  /**
   * Necessário para só pedir o localStorage onde ele existe, que é no front end
   *
   * Isso é um hook de react
   */
  useEffect(() => {
    setSavedExpenses(JSON.parse(localStorage.getItem("savedExpenses") || "[]"));
  }, []);

  return (
    <>
      <ExpenseList expenses={savedExpenses} />
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default ExpensesPage;
