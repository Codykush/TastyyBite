import React, { useState } from "react";

const BACKEND_URL = "http://3.110.136.211:8080";

function FoodCard({ food }) {
    const [imageError, setImageError] = useState(false);

    // Get image filename from whatever field your backend sends
    const imageName =
        food?.imageUrl ||
        food?.image ||
        food?.imageName ||
        food?.photo ||
        food?.foodImage ||
        "";

    // Extract only filename if backend accidentally sends a full URL/path
    const filename = imageName
        ? String(imageName).split("/").pop()
        : "";

    // Since backend is HTTP and frontend is HTTPS,
    // directly using HTTP from Vercel will be blocked as Mixed Content.
    // Use Vercel rewrite instead.
    const imageUrl =
        filename && !imageError
            ? `/images/${encodeURIComponent(filename)}`
            : null;

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

            {/* FOOD IMAGE */}
            <div className="relative w-full h-56 bg-gray-100">

                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={food?.name || "Food"}
                        className="w-full h-full object-cover"
                        onError={() => {
                            console.log(
                                "Image failed:",
                                imageUrl,
                                "Food:",
                                food
                            );
                            setImageError(true);
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-500 text-sm">
                            No image available
                        </span>
                    </div>
                )}

                {/* VEG / NON-VEG */}
                {food?.veg !== undefined && (
                    <div className="absolute top-3 left-3">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                food.veg
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                            }`}
                        >
                            {food.veg ? "VEG" : "NON-VEG"}
                        </span>
                    </div>
                )}

                {/* OFFER */}
                {food?.offer && (
                    <div className="absolute top-3 right-3">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {food.offer}% OFF
                        </span>
                    </div>
                )}
            </div>

            {/* FOOD DETAILS */}
            <div className="p-5">

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {food?.name || "Unnamed Food"}
                </h3>

                {food?.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {food.description}
                    </p>
                )}

                <div className="flex items-center justify-between">

                    {/* PRICE */}
                    <div>
                        <span className="text-2xl font-bold text-orange-600">
                            ₹{food?.price ?? 0}
                        </span>
                    </div>

                    {/* CATEGORY */}
                    {food?.category && (
                        <span className="text-sm text-gray-500">
                            {food.category}
                        </span>
                    )}
                </div>

                {/* EXTRA DETAILS */}
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">

                    {food?.rating !== undefined && (
                        <span>
                            ⭐ {food.rating}
                        </span>
                    )}

                    {food?.deliveryTime !== undefined && (
                        <span>
                            🕒 {food.deliveryTime} min
                        </span>
                    )}

                </div>
            </div>
        </div>
    );
}

export default FoodCard;