import { useState, useEffect } from "react";
import NavbarContainer from "./navbar/navbar";
import { Route, Routes } from "react-router-dom";
import NewCategoryComponent from "./newCategoryComponent/newCategoryComponent";
import Charts from "./charts/charts";
import CategoryContainer from "./categoryContainer/categoryContainer";
import api from "./api";

const AuthenticatedContainer = (props) => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState([]);

  const loadExpenses = async () => {
    const parsedExpenses = await api.getExpenses(props.token);
    console.log(parsedExpenses);
    setExpenses(parsedExpenses);
  };

  const loadCategory = async () => {
    const parsedCategory = await api.getCategory(props.token);
    console.log(parsedCategory);
    setCategory(parsedCategory);
  };

  const createNewExpense = async (newExpense) => {
    await api.createNewExpense(props.token, newExpense);
    loadExpenses();
  };

  const createNewCategory = async (newCategory) => {
    await api.createNewCategory(props.token, newCategory);
    loadCategory();
  };

  const deleteExpense = async (expenseId) => {
    await api.deleteExpense(props.token, expenseId);
    loadExpenses();
  };

  const deleteCategory = async (categoryId) => {
    await api.deleteCategory(props.token, categoryId);
    loadCategory();
  };

  const updateExpense = async (expenseId, expenseToUpdate) => {
    await api.updateExpense(props.token, expenseId, expenseToUpdate);
    loadExpenses();
  };

  const updateCategory = async (categoryId, categoryToUpdate) => {
    await api.updateCategory(props.token, categoryId, categoryToUpdate);
    loadCategory();
  };

  useEffect(() => {
    loadExpenses();
  }, []);
  useEffect(() => {
    loadCategory();
  }, []);
  return (
    <div>
      <NavbarContainer isLoggedIn={!!props.token} logout={props.logout} />
      <Routes>
        <Route
          element={category.map((category) => {
            const categoryExpenses = expenses.filter(
              (expense) => expense.category === category.id
            );
            return (
              <div className="category" key={category.id}>
                <CategoryContainer
                  category={category}
                  updateCategory={updateCategory}
                  deleteCategory={deleteCategory}
                  expenses={categoryExpenses}
                  deleteExpense={deleteExpense}
                  updateExpense={updateExpense}
                  createNewExpense={createNewExpense}
                ></CategoryContainer>
              </div>
            );
          })}
          path="/"
        />
        <Route
          element={
            <NewCategoryComponent createNewCategory={createNewCategory} />
          }
          path="/create"
        />
        <Route element={<Charts />} path="/chart" />
      </Routes>
    </div>
  );
};
export default AuthenticatedContainer;
