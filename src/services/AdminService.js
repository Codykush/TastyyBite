import api from "./api";

export const addFood = async (food) => {
    const response = await api.post("/foods", food);
    return response.data;
};