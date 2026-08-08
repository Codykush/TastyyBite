import api from "./api";

// ==============================
// GET ALL FOODS
// ==============================

export const getAllFoods = () => {
    return api.get("/foods");
};

// ==============================
// GET FOOD BY ID
// ==============================

export const getFoodById = (id) => {
    return api.get(`/foods/${id}`);
};

// ==============================
// DELETE FOOD
// ==============================

export const deleteFood = (id) => {
    return api.delete(`/foods/${id}`);
};

// ==============================
// SEARCH FOOD
// ==============================

export const searchFood = (keyword) => {
    return api.get("/foods/search", {
        params: {
            keyword,
        },
    });
};

// ==============================
// CATEGORY
// ==============================

export const getFoodsByCategory = (category) => {
    return api.get(`/foods/category/${category}`);
};

// ==============================
// VEG FOOD
// ==============================

export const getVegFoods = () => {
    return api.get("/foods/veg");
};

// ==============================
// NON-VEG FOOD
// ==============================

export const getNonVegFoods = () => {
    return api.get("/foods/nonveg");
};

// ==============================
// OFFERS
// ==============================

export const getFoodsByOffer = (minOffer) => {
    return api.get("/foods/offers", {
        params: {
            minOffer,
        },
    });
};

// ==============================
// DELIVERY TIME
// ==============================

export const getFoodsByDeliveryTime = (maxTime) => {
    return api.get("/foods/delivery", {
        params: {
            maxTime,
        },
    });
};

// ==============================
// BUDGET
// ==============================

export const getFoodsByBudget = (min, max) => {
    return api.get("/foods/budget", {
        params: {
            min,
            max,
        },
    });
};