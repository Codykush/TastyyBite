import api from "./api";

// Add food
export const addFood = (food) => {
    return api.post("/foods", food);
};

// Update food
export const updateFood = (id, food) => {
    return api.put(`/foods/${id}`, food);
};

// Delete food
export const deleteAdminFood = (id) => {
    return api.delete(`/foods/${id}`);
};