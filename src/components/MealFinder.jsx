import { useState } from "react";

function MealFinder({ onSearch }) {
    const [budget, setBudget] = useState("");
    const [category, setCategory] = useState("");
    const [veg, setVeg] = useState("");
    const [delivery, setDelivery] = useState("");
    const [offer, setOffer] = useState("");
    const [searching, setSearching] = useState(false);

    const handleSearch = async () => {
        const filters = {};

        if (category) {
            filters.category = category;
        }

        if (veg !== "") {
            filters.veg = veg === "true";
        }

        if (budget) {
            filters.maxBudget = Number(budget);
        }

        if (delivery) {
            filters.maxDeliveryTime = Number(delivery);
        }

        if (offer) {
            filters.minOffer = Number(offer);
        }

        console.log("Meal filters:", filters);

        try {
            setSearching(true);
            await onSearch(filters);
        } catch (error) {
            console.error("Meal search error:", error);
        } finally {
            setSearching(false);
        }
    };

    const clearFilters = async () => {
        setBudget("");
        setCategory("");
        setVeg("");
        setDelivery("");
        setOffer("");

        try {
            setSearching(true);
            await onSearch({});
        } finally {
            setSearching(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-center mb-8">
                🍽️ Find Your Perfect Meal
            </h2>

            <div className="grid md:grid-cols-5 gap-5">

                {/* Budget */}

                <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
                >
                    <option value="">Budget</option>
                    <option value="100">Under ₹100</option>
                    <option value="200">Under ₹200</option>
                    <option value="300">Under ₹300</option>
                    <option value="500">Under ₹500</option>
                </select>

                {/* Category */}

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
                >
                    <option value="">Food</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Burger">Burger</option>
                    <option value="Biryani">Biryani</option>
                    <option value="Roll">Roll</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Cake">Cake</option>
                    <option value="Dessert">Dessert</option>
                </select>

                {/* Diet */}

                <select
                    value={veg}
                    onChange={(e) => setVeg(e.target.value)}
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
                >
                    <option value="">Diet</option>
                    <option value="true">Veg</option>
                    <option value="false">Non Veg</option>
                </select>

                {/* Delivery */}

                <select
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
                >
                    <option value="">Delivery</option>
                    <option value="20">Under 20 min</option>
                    <option value="30">Under 30 min</option>
                    <option value="45">Under 45 min</option>
                </select>

                {/* Offers */}

                <select
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
                >
                    <option value="">Offers</option>
                    <option value="10">10%+</option>
                    <option value="20">20%+</option>
                    <option value="30">30%+</option>
                    <option value="40">40%+</option>
                </select>

            </div>

            <div className="flex justify-center gap-4 mt-8">

                <button
                    type="button"
                    onClick={handleSearch}
                    disabled={searching}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold transition"
                >
                    {searching
                        ? "Searching..."
                        : "🔍 Find Best Meal"}
                </button>

                <button
                    type="button"
                    onClick={clearFilters}
                    disabled={searching}
                    className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-xl transition"
                >
                    Clear
                </button>

            </div>

        </div>
    );
}

export default MealFinder;