import { useState } from "react";
import axios from "axios";
import { addFood } from "../services/AdminService";

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
            id: 1
        }
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFood({
            ...food,
            [name]: value
        });

    };

    const uploadImage = async () => {

        const formData = new FormData();

        formData.append("file", image);

        const response = await axios.post(
            "http://3.110.136.211:8080/images/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        return response.data.imageUrl;

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            let imageUrl = "";

            if (image != null) {

                imageUrl = await uploadImage();

            }

            const finalFood = {

                ...food,

                imageUrl: imageUrl

            };

            await addFood(finalFood);

            alert("Food Added Successfully");

        }

        catch (error) {

            console.log(error);

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
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="originalPrice"
                    placeholder="Original Price"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="offerPercentage"
                    placeholder="Offer %"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="deliveryTime"
                    placeholder="Delivery Time"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="platform"
                    placeholder="Platform"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="orderUrl"
                    placeholder="Order URL"
                    onChange={handleChange}
                />

                <br /><br />

                <label>

                    Veg

                    <input
                        type="checkbox"
                        checked={food.veg}
                        onChange={(e) =>
                            setFood({
                                ...food,
                                veg: e.target.checked
                            })
                        }
                    />

                </label>

                <br /><br />

                <input
                    type="file"
                    onChange={(e) =>
                        setImage(e.target.files[0])
                    }
                />

                <br /><br />

                <button>

                    Add Food

                </button>

            </form>

        </div>

    );

}

export default AdminAddFood;