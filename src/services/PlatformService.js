import api from "./api";


export const getAllPlatforms = async () => {

    const response = await api.get("/platforms");

    return response.data;

};