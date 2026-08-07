import { useEffect, useState } from "react";
import FloatingAIButton from "../components/FloatingAIButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MealFinder from "../components/MealFinder";
import FoodCard from "../components/FoodCard";

import { getAllFoods, filterFoods } from "../services/FoodService";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      const data = await getAllFoods();
      setFoods(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      setFoods([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMealSearch = async (filters) => {
    try {
      setLoading(true);

      console.log("Filters Sent:", filters);

      const data = await filterFoods(filters);

      console.log("Foods Returned:", data);

      setFoods(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      alert("Unable to find meals right now");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <Hero />

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <MealFinder onSearch={handleMealSearch} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">🍽️ Recommended Foods</h2>

        {loading ? (
          <h1 className="text-center text-2xl font-semibold">
            Loading Foods...
          </h1>
        ) : foods.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl font-semibold text-gray-700">
              No food found 😥
            </p>

            <p className="text-gray-500 mt-2">
              Try changing your budget or category filters.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}
      </div>
      <FloatingAIButton />
    </div>
  );
}

export default Home;
