import api from "./api";

// Get all foods
export const getAllFoods = async () => {
  const response = await api.get("/foods");
  return response.data;
};

// Filter foods
export const filterFoods = async (filters) => {
  const response = await api.post("/foods/filter", filters);
  return response.data;
};

// Delete food
export const deleteFood = async (id) => {
  const response = await api.delete(`/foods/${id}`);
  return response.data;
};