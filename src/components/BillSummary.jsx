import { useCart } from "../context/CartContext";

function BillSummary(){
    const {cartItems,increaseQuantity,decreaseQuantity,removeFromCart}=useCart();
    const subtotal=cartItems.reduce((total,item)=>total+item.price*item.quantity,0);
    const gst=subtotal*.05,platformFee=cartItems.length?8:0,delivery=cartItems.length?40:0,total=subtotal+gst+platformFee+delivery;
    return <div className="rounded-2xl border border-[#302b27] bg-[#171513] p-6">
        <div className="tb-label">Order summary</div><h2 className="mt-2 text-2xl font-black text-[#fff8ef]">🧾 Bill Summary</h2>
        {cartItems.length===0?<p className="mt-5 text-[#8f857c]">No items added yet.</p>:<div className="mt-5 space-y-4">{cartItems.map(item=><div key={item.id} className="border-b border-[#302b27] pb-4"><div className="flex justify-between gap-4 font-black text-[#fff8ef]"><span>{item.name}</span><span>₹{item.price*item.quantity}</span></div><div className="mt-3 flex items-center gap-3"><button type="button" onClick={()=>decreaseQuantity(item.id)} className="h-8 w-8 rounded-lg bg-[#2a2521] font-black text-[#fff8ef]">−</button><span className="font-bold text-[#fff8ef]">{item.quantity}</span><button type="button" onClick={()=>increaseQuantity(item.id)} className="h-8 w-8 rounded-lg bg-[#173722] font-black text-[#72e09b]">+</button><button type="button" onClick={()=>removeFromCart(item.id)} className="ml-auto text-sm font-black text-[#ff8060]">Remove</button></div></div>)}</div>}
        <div className="mt-6 space-y-3 text-sm font-semibold text-[#b8ada3]"><div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toFixed(0)}</span></div><div className="flex justify-between"><span>GST 5%</span><span>₹{gst.toFixed(0)}</span></div><div className="flex justify-between"><span>Platform Fee</span><span>₹{platformFee}</span></div><div className="flex justify-between"><span>Delivery</span><span>₹{delivery}</span></div><div className="flex justify-between border-t border-[#302b27] pt-4 text-xl font-black text-[#fff8ef]"><span>Total</span><span className="text-[#72e09b]">₹{total.toFixed(0)}</span></div></div>
    </div>;
}
export default BillSummary;