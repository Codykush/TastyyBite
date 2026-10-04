import { useCart } from "../context/CartContext";

function PlatformCard({platform}){
    const {addToCart}=useCart();
    const addFood=()=>addToCart({id:platform.food.id,name:platform.food.name,price:platform.price,platform:platform.platform,orderUrl:platform.orderUrl,deliveryTime:platform.deliveryTime});
    return <div className="tb-card tb-card-hover p-5">
        <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-widest text-[#ff7135]">Platform</p><h2 className="mt-2 text-xl font-black text-[#fff8ef]">{platform.platform}</h2></div><span className="rounded-xl bg-[#211e1b] px-3 py-2 text-lg">🍽️</span></div>
        <p className="mt-4 text-sm font-semibold text-[#b8ada3]">🚚 {platform.deliveryTime} min</p>
        <h3 className="mt-3 text-3xl font-black text-[#fff8ef]">₹{platform.price}</h3>
        {platform.offerPercentage>0&&<p className="mt-1 text-sm font-black text-[#72e09b]">{platform.offerPercentage}% OFF</p>}
        <div className="mt-5 flex gap-3"><button type="button" onClick={addFood} className="flex-1 rounded-xl border border-[#3d5c46] bg-[#173722] px-4 py-3 text-sm font-black text-[#72e09b] hover:bg-[#1e442b]">+ Add</button><button type="button" onClick={()=>window.open(platform.orderUrl,"_blank","noopener,noreferrer")} className="tb-orange-button flex-1">Order</button></div>
    </div>;
}
export default PlatformCard;