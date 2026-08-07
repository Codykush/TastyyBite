import { useState } from "react";

function MealFinder({ onSearch }) {
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [veg, setVeg] = useState("");
  const [delivery, setDelivery] = useState("");
  const [offer, setOffer] = useState("");

  const handleSearch = () => {
    const request = {
      keyword: null,
      city: null,

      category: category || null,

      veg:
        veg === ""
          ? null
          : veg === "true",

      maxBudget:
        budget === ""
          ? null
          : Number(budget),

      minPrice: null,

      maxPrice: null,

      maxDeliveryTime:
        delivery === ""
          ? null
          : Number(delivery),

      minOffer:
        offer === ""
          ? null
          : Number(offer),

      people: null,
    };

    console.log("Sending Filter Request:", request);

    onSearch(request);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">
        🍽 Find Your Perfect Meal
      </h2>

      <div className="grid md:grid-cols-5 gap-5">

        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">Budget</option>
          <option value="100">Under ₹100</option>
          <option value="200">Under ₹200</option>
          <option value="300">Under ₹300</option>
          <option value="500">Under ₹500</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-3"
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

        <select
          value={veg}
          onChange={(e) => setVeg(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">Diet</option>
          <option value="true">Veg</option>
          <option value="false">Non Veg</option>
        </select>

        <select
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">Delivery</option>
          <option value="20">Under 20 min</option>
          <option value="30">Under 30 min</option>
          <option value="45">Under 45 min</option>
        </select>

        <select
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="">Offers</option>
          <option value="10">10%+</option>
          <option value="20">20%+</option>
          <option value="30">30%+</option>
          <option value="40">40%+</option>
        </select>

      </div>

      <div className="text-center mt-8">

        <button
          onClick={handleSearch}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl"
        >
          🔍 Find Best Meal
        </button>

      </div>

    </div>
  );
}

export default MealFinder;