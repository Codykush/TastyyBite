import { useEffect,useState } from "react";
import FloatingAIButton from "../components/FloatingAIButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MealFinder from "../components/MealFinder";
import FoodCard from "../components/FoodCard";
import { getAllFoods,filterFoods } from "../services/FoodService";

function Home(){
    const [foods,setFoods]=useState([]);const [loading,setLoading]=useState(true);
    useEffect(()=>{loadFoods()},[]);
    const loadFoods=async()=>{try{setLoading(true);const data=await getAllFoods();setFoods(Array.isArray(data)?data:[])}catch(error){console.error("Error loading foods:",error);setFoods([])}finally{setLoading(false)}};
    const handleMealSearch=async(filters)=>{try{setLoading(true);const data=await filterFoods(filters);setFoods(Array.isArray(data)?data:[])}catch(error){console.error("Error filtering foods:",error);alert("Unable to find meals right now");setFoods([])}finally{setLoading(false)}};
    return <div className="tb-page"><Navbar/><main><Hero/><div className="tb-container relative z-10 -mt-8 sm:-mt-12"><MealFinder onSearch={handleMealSearch}/></div><section className="tb-container py-16 sm:py-20"><div className="mb-8"><div className="tb-label">Fresh picks</div><h2 className="mt-3 tb-section-title">Recommended foods.</h2><p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-[#91867d]">Explore meals and compare platforms before you spend.</p></div>{loading?<div className="tb-card py-20 text-center"><div className="mx-auto h-9 w-9 animate-spin rounded-full border-[3px] border-[#39332e] border-t-[#ff7135]"/><p className="mt-4 font-bold text-[#b8ada3]">Loading delicious options...</p></div>:foods.length===0?<div className="tb-card p-12 text-center"><div className="text-5xl">😥</div><p className="mt-4 text-xl font-black text-[#fff8ef]">No food found</p><p className="mt-2 text-sm text-[#91867d]">Try changing your budget or category filters.</p></div>:<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{foods.map(food=><FoodCard key={food.id} food={food}/>)}</div>}</section></main><footer className="border-t border-[#211e1b] bg-[#080808]"><div className="tb-container py-10 text-center text-xs font-semibold text-[#6f665f]">© 2026 TastyBite · Eat smarter, spend better.</div></footer><FloatingAIButton/></div>;
}
export default Home;