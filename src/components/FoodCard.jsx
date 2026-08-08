import { useState } from "react";
import ComparePrices from "./ComparePrices";
import ProtectedButton from "./ProtectedButton";

function FoodCard({ food }) {
    const [open, setOpen] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Backend may return different image field names.
    const imageName =
        food?.imageUrl ||
        food?.image ||
        food?.imageName ||
        food?.photo ||
        food?.foodImage ||
        "";

    // Extract only filename.
    // Handles values such as:
    // pizza.jpg
    // /uploads/pizza.jpg
    // http://localhost:8080/uploads/pizza.jpg
    // http://3.110.136.211:8080/uploads/pizza.jpg
    const filename = imageName
        ? String(imageName).split("/").pop()
        : "";

    // IMPORTANT:
    // Do NOT use localhost or the AWS HTTP URL here.
    // Vercel proxies /images/* to AWS.
    const imageUrl =
        filename && !imageError
            ? `/images/${encodeURIComponent(filename)}`
            : null;

    return (
        <>
            <div className="bg-white rounded-xl shadow overflow-hidden">

                {/* FOOD IMAGE */}
                <div className="w-full h-56 bg-gray-100">

                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={food?.name || "Food"}
                            className="w-full h-56 object-cover"
                            onError={() => {
                                console.error(
                                    "Food image failed:",
                                    imageUrl,
                                    food
                                );
                                setImageError(true);
                            }}
                        />
                    ) : (
                        <div className="w-full h-56 flex items-center justify-center bg-gray-200">
                            <span className="text-gray-500">
                                No image available
                            </span>
                        </div>
                    )}

                </div>

                {/* FOOD DETAILS */}
                <div className="p-5">

                    <h2 className="text-2xl font-bold">
                        {food?.name || "Unnamed Food"}
                    </h2>

                    {food?.description && (
                        <p className="text-gray-600 mt-2">
                            {food.description}
                        </p>
                    )}

                    <div className="flex justify-between mt-4">

                        {/* PRICE */}
                        <span className="font-bold text-red-600">
                            ₹{food?.price ?? 0}
                        </span>

                        {/* RATING */}
                        <span>
                            ⭐{food?.rating ?? "4.5"}
                        </span>

                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 flex gap-3">

                        {/* COMPARE */}
                        <ProtectedButton
                            onClick={() => setOpen(true)}
                        >
                            Compare
                        </ProtectedButton>

                        {/* ORDER */}
                        <ProtectedButton
                            onClick={() => {
                                if (food?.orderUrl) {
                                    window.open(
                                        food.orderUrl,
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                } else {
                                    alert("Order link is not available.");
                                }
                            }}
                        >
                            Order
                        </ProtectedButton>

                    </div>

                </div>

            </div>

            {/* COMPARE MODAL */}
            {open && (
                <ComparePrices
                    food={food}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
}

export default FoodCard;