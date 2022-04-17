import { useState, useEffect } from "react";
import NavbarContainer from "./navbar/navbar";
import { Route, Routes } from "react-router-dom";
import NewCategoryComponent from "./newCategoryComponent/newCategoryComponent";
import CategoryContainer from "./categoryContainer/categoryContainer";

const MainContainer = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState([]);

  const getExpenses = async () => {
    const expensesApi = await fetch(
      "https://vast-meadow-87338.herokuapp.com/api/expenses"
    );
    const parsedExpenses = await expensesApi.json();
    console.log(parsedExpenses);
    setExpenses(parsedExpenses);
  };

  const getCategory = async () => {
    const categoryApi = await fetch(
      "https://vast-meadow-87338.herokuapp.com/api/category"
    );
    const parsedCategory = await categoryApi.json();
    console.log(parsedCategory);
    setCategory(parsedCategory);
  };

  const createNewExpense = async (newExpense) => {
    await fetch("https://vast-meadow-87338.herokuapp.com/api/expenses", {
      method: "POST",
      body: JSON.stringify(newExpense),
      headers: {
        "Content-Type": "application/json",
      },
    });
    getExpenses();
  };

  const createNewCategory = async (newCategory) => {
    const newCategoryApi = await fetch(
      "https://vast-meadow-87338.herokuapp.com/api/category",
      {
        method: "POST",
        body: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await newCategoryApi.json();
    getCategory();
  };

  const deleteExpense = async (expenseId) => {
    await fetch(
      `https://vast-meadow-87338.herokuapp.com/api/expenses/${expenseId}`,
      {
        method: "DELETE",
      }
    );
    getExpenses();
  };

  const deleteCategory = async (categoryId) => {
    await fetch(
      `https://vast-meadow-87338.herokuapp.com/api/category/${categoryId}`,
      {
        method: "DELETE",
      }
    );
    getCategory();
  };

  const updateExpense = async (newExpenseId, expenseToUpdate) => {
    const updateExpenseApi = await fetch(
      `https://vast-meadow-87338.herokuapp.com/api/expenses/${newExpenseId}`,
      {
        method: "PUT",
        body: JSON.stringify(expenseToUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await updateExpenseApi.json();
    getExpenses();
  };

  const updateCategory = async (newCategoryId, categoryToUpdate) => {
    await fetch(
      `https://vast-meadow-87338.herokuapp.com/api/category/${newCategoryId}`,
      {
        method: "PUT",
        body: JSON.stringify(categoryToUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getCategory();
  };

  useEffect(() => {
    getExpenses();
  }, []);
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div>
      <NavbarContainer />
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
        {/* <Route element={<NewExpenseComponent />} path="/login" />
        <Route element={<NewExpenseComponent />} path="/signup" /> */}
      </Routes>
    </div>
  );
};
export default MainContainer;
