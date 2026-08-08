import api from "./api";

// Get all foods
export const getAllFoods = () => {
    return api.get("/foods");
};

// Filter foods
export const filterFoods = (filterData) => {
    return api.post("/api/foods/filter", filterData);
};

// Get food by ID
export const getFoodById = (id) => {
    return api.get(`/foods/${id}`);
};

// Search food
export const searchFood = (keyword) => {
    return api.get("/foods/search", {
        params: {
            keyword: keyword
        }
    });
};

// Get foods by category
export const getFoodsByCategory = (category) => {
    return api.get(`/foods/category/${category}`);
};

// Get veg foods
export const getVegFoods = () => {
    return api.get("/foods/veg");
};

// Get non-veg foods
export const getNonVegFoods = () => {
    return api.get("/foods/nonveg");
};

// Get foods by restaurant
export const getFoodsByRestaurant = (restaurantId) => {
    return api.get(`/foods/restaurant/${restaurantId}`);
};

// Get foods by offer
export const getFoodsByOffer = (minOffer) => {
    return api.get("/foods/offers", {
        params: {
            minOffer: minOffer
        }
    });
};

// Get foods by delivery time
export const getFoodsByDeliveryTime = (maxTime) => {
    return api.get("/foods/delivery", {
        params: {
            maxTime: maxTime
        }
    });
};

// Get foods by budget
export const getFoodsByBudget = (min, max) => {
    return api.get("/foods/budget", {
        params: {
            min: min,
            max: max
        }
    });
};

// Delete food
export const deleteFood = (id) => {
    return api.delete(`/foods/${id}`);
};