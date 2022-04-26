import constants from "./constants";

const setAuthHeader = (token) => {
  return {
    Authorization: `Token ${token}`,
  };
};

const makeApiCall = ({
  token,
  endpoint,
  method = "GET",
  additionalHeaders = {},
  body = null,
}) => {
  return fetch(`${constants.API_BACKEND}/${endpoint}`, {
    method,
    body,
    headers: {
      ...additionalHeaders,
      ...setAuthHeader(token),
    },
  });
};

const exported = {
  getExpenses: async (token) => {
    const expensesApi = await makeApiCall({ token, endpoint: "api/expenses" });
    const parsedExpenses = await expensesApi.json();
    return parsedExpenses;
  },
  getCategory: async (token) => {
    const categoryApi = await makeApiCall({ token, endpoint: "api/category" });
    const parsedCategory = await categoryApi.json();
    return parsedCategory;
  },
  createNewExpense: async (token, newExpense) => {
    const data = await makeApiCall({
      token,
      endpoint: "api/expenses",
      method: "POST",
      body: `${JSON.stringify(newExpense)}`,
      additionalHeaders: {
        "Content-Type": "application/json",
      },
    });
    const parsedExpenses = await data.json();
    return parsedExpenses;
  },
  createNewCategory: async (token, newCategory) => {
    const data = await makeApiCall({
      token,
      endpoint: "api/category",
      method: "POST",
      body: `${JSON.stringify(newCategory)}`,
      additionalHeaders: {
        "Content-Type": "application/json",
      },
    });
    const parsedCategory = await data.json();
    return parsedCategory;
  },
  deleteExpense: async (token, expenseId) => {
    await makeApiCall({
      token,
      endpoint: `api/expenses/${expenseId}`,
      method: "DELETE",
      additionalHeaders: {
        "Content-Type": "application/json",
      },
    });
  },
  deleteCategory: async (token, categoryId) => {
    await makeApiCall({
      token,
      endpoint: `api/category/${categoryId}`,
      method: "DELETE",
      additionalHeaders: {
        "Content-Type": "application/json",
      },
    });
  },
  updateExpense: async (token, expensesId, expenseToUpdate) => {
    await makeApiCall({
      token,
      endpoint: `api/expenses/${expensesId}`,
      method: "PUT",
      body: `${JSON.stringify(expenseToUpdate)}`,
      additionalHeaders: { "Content-Type": "application/json" },
    });
  },
  updateCategory: async (token, categoryId, categoryToUpdate) => {
    await makeApiCall({
      token,
      endpoint: `api/category/${categoryId}`,
      method: "PUT",
      body: `${JSON.stringify(categoryToUpdate)}`,
      additionalHeaders: { "Content-Type": "application/json" },
    });
  },
};
export default exported;
