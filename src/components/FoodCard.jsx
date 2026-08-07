import { useState } from "react";
import ComparePrices from "./ComparePrices";
import ProtectedButton from "./ProtectedButton";

function FoodCard({ food }) {

    const [open, setOpen] = useState(false);

    return (

        <>
            <div className="bg-white rounded-xl shadow overflow-hidden">

                <img
                    src={`http://localhost:8080/uploads/${food.imageUrl}`}
                    alt={food.name}
                    className="w-full h-56 object-cover"
                />

                <div className="p-5">

                    <h2 className="text-2xl font-bold">
                        {food.name}
                    </h2>

                    <p className="text-gray-600 mt-2">
                        {food.description}
                    </p>

                    <div className="flex justify-between mt-4">

                        <span className="font-bold text-red-600">
                            ₹{food.price}
                        </span>

                        <span>
                            ⭐4.5
                        </span>

                    </div>

                    <div className="mt-5 flex gap-3">

                        <ProtectedButton
                            onClick={() => setOpen(true)}
                        >
                            Compare
                        </ProtectedButton>

                        <ProtectedButton
                            onClick={() =>
                                window.open(food.orderUrl)
                            }
                        >
                            Order
                        </ProtectedButton>

                    </div>

                </div>

            </div>

            {open &&

                <ComparePrices
                    food={food}
                    onClose={() => setOpen(false)}
                />

            }

        </>

    );

}

export default FoodCard;