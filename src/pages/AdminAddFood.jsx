import { useState } from "react";
import axios from "axios";
import { addFood } from "../services/AdminService";

const BACKEND_URL = "http://3.110.136.211:8080";

function AdminAddFood() {

    const [food, setFood] = useState({
        name: "",
        price: "",
        originalPrice: "",
        description: "",
        category: "",
        veg: true,
        offerPercentage: "",
        deliveryTime: "",
        platform: "",
        orderUrl: "",
        available: true,
        imageUrl: "",
        restaurant: {
            id: 1,
        },
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFood((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const uploadImage = async () => {

        if (!image) {
            return "";
        }

        const formData = new FormData();

        formData.append("file", image);

        const response = await axios.post(
            `${BACKEND_URL}/images/upload`,
            formData
        );

        return response.data.imageUrl;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            let imageUrl = "";

            if (image) {
                imageUrl = await uploadImage();
            }

            const finalFood = {
                ...food,
                imageUrl,
            };

            await addFood(finalFood);

            alert("Food Added Successfully");

            setFood({
                name: "",
                price: "",
                originalPrice: "",
                description: "",
                category: "",
                veg: true,
                offerPercentage: "",
                deliveryTime: "",
                platform: "",
                orderUrl: "",
                available: true,
                imageUrl: "",
                restaurant: {
                    id: 1,
                },
            });

            setImage(null);

        } catch (error) {

            console.error("Error Adding Food:", error);

            alert("Error Adding Food");
        }
    };

    return (

        <div style={{ padding: "30px" }}>

            <h2>Add Food</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Food Name"
                    value={food.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="price"
                    placeholder="Price"
                    value={food.price}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="originalPrice"
                    placeholder="Original Price"
                    value={food.originalPrice}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="description"
                    placeholder="Description"
                    value={food.description}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="category"
                    placeholder="Category"
                    value={food.category}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="offerPercentage"
                    placeholder="Offer %"
                    value={food.offerPercentage}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="deliveryTime"
                    placeholder="Delivery Time"
                    value={food.deliveryTime}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="platform"
                    placeholder="Platform"
                    value={food.platform}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="orderUrl"
                    placeholder="Order URL"
                    value={food.orderUrl}
                    onChange={handleChange}
                />

                <br /><br />

                <label>

                    Veg

                    <input
                        type="checkbox"
                        checked={food.veg}
                        onChange={(e) =>
                            setFood((prev) => ({
                                ...prev,
                                veg: e.target.checked,
                            }))
                        }
                    />

                </label>

                <br /><br />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setImage(e.target.files?.[0] || null)
                    }
                />

                <br /><br />

                <button type="submit">
                    Add Food
                </button>

            </form>

        </div>
    );
}

export default AdminAddFood;