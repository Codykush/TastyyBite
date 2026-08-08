import api from "./api";

// ==============================
// GET ALL FOODS
// ==============================
export const getAllFoods = async () => {
    const response = await api.get("/foods");
    return response.data;
};

// ==============================
// GET FOOD BY ID
// ==============================
export const getFoodById = async (id) => {
    const response = await api.get(`/foods/${id}`);
    return response.data;
};

// ==============================
// DELETE FOOD
// ==============================
export const deleteFood = async (id) => {
    const response = await api.delete(`/foods/${id}`);
    return response.data;
};

// ==============================
// SEARCH FOOD
// ==============================
export const searchFood = async (keyword) => {
    const response = await api.get("/foods/search", {
        params: {
            keyword,
        },
    });

    return response.data;
};

// ==============================
// CATEGORY
// ==============================
export const getFoodsByCategory = async (category) => {
    const response = await api.get(`/foods/category/${category}`);
    return response.data;
};

// ==============================
// VEG FOOD
// ==============================
export const getVegFoods = async () => {
    const response = await api.get("/foods/veg");
    return response.data;
};

// ==============================
// NON-VEG FOOD
// ==============================
export const getNonVegFoods = async () => {
    const response = await api.get("/foods/nonveg");
    return response.data;
};

// ==============================
// OFFERS
// ==============================
export const getFoodsByOffer = async (minOffer) => {
    const response = await api.get("/foods/offers", {
        params: {
            minOffer,
        },
    });

    return response.data;
};

// ==============================
// DELIVERY TIME
// ==============================
export const getFoodsByDeliveryTime = async (maxTime) => {
    const response = await api.get("/foods/delivery", {
        params: {
            maxTime,
        },
    });

    return response.data;
};

// ==============================
// BUDGET
// ==============================
export const getFoodsByBudget = async (min, max) => {
    const response = await api.get("/foods/budget", {
        params: {
            min,
            max,
        },
    });

    return response.data;
};

// ==============================
// FILTER FOODS
// ==============================
export const filterFoods = async (filters = {}) => {
    const response = await api.get("/foods/filter", {
        params: filters,
    });

    return response.data;
};