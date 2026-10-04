import { useState } from "react";
import ComparePrices from "./ComparePrices";
import ProtectedButton from "./ProtectedButton";

function FoodCard({food}){
    const [open,setOpen]=useState(false);
    const [imageError,setImageError]=useState(false);
    const imageName=food?.imageUrl||food?.image||food?.imageName||food?.photo||food?.foodImage||"";
    const filename=imageName?String(imageName).split("/").pop():"";
    const imageUrl=filename&&!imageError?`/images/${encodeURIComponent(filename)}`:null;
    return <>
        <article className="tb-card tb-card-hover overflow-hidden">
            <div className="relative h-64 overflow-hidden bg-[#151311]">
                {imageUrl?<img src={imageUrl} alt={food?.name||"Food"} className="h-full w-full object-cover transition duration-500 hover:scale-105" onError={()=>setImageError(true)}/>:<div className="flex h-full items-center justify-center text-6xl">🍽️</div>}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"/>
                {food?.offerPercentage>0&&<div className="absolute left-4 top-4 rounded-full bg-[#ff6b2b]/90 px-3 py-1.5 text-xs font-black text-white">{food.offerPercentage}% OFF</div>}
                {food?.veg&&<div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-green-300">● VEG</div>}
            </div>
            <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0"><h2 className="truncate text-xl font-black text-[#fff8ef]">{food?.name||"Unnamed Food"}</h2>{food?.description&&<p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-[#a99e94]">{food.description}</p>}</div>
                    <div className="shrink-0 rounded-xl bg-[#241f1b] px-3 py-2"><span className="text-lg font-black text-[#ff8a5c]">₹{food?.price??0}</span></div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#211e1b] p-3"><p className="text-[10px] font-black uppercase tracking-wider text-[#a99e94]">Delivery</p><p className="mt-1 text-sm font-bold text-[#fff8ef]">⏱ {food?.deliveryTime||"—"}</p></div>
                    <div className="rounded-xl bg-[#211e1b] p-3"><p className="text-[10px] font-black uppercase tracking-wider text-[#a99e94]">Category</p><p className="mt-1 truncate text-sm font-bold text-[#fff8ef]">{food?.category||"Food"}</p></div>
                </div>
                <div className="mt-5 flex gap-3">
                    <ProtectedButton onClick={()=>setOpen(true)}>⚖ Compare</ProtectedButton>
                    <ProtectedButton onClick={()=>{if(food?.orderUrl)window.open(food.orderUrl,"_blank","noopener,noreferrer");else alert("Order link is not available.")}}>Order →</ProtectedButton>
                </div>
            </div>
        </article>
        {open&&<ComparePrices food={food} onClose={()=>setOpen(false)}/>}
    </>;
}
export default FoodCard;