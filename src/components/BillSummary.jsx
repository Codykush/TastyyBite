import { useCart } from "../context/CartContext";


function BillSummary(){


const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
}=useCart();



const subtotal = cartItems.reduce(

(total,item)=>

total + item.price*item.quantity,

0

);



const gst=subtotal*0.05;


const platformFee =
cartItems.length>0 ? 8 : 0;


const delivery =
cartItems.length>0 ? 40 : 0;



const total =
subtotal+
gst+
platformFee+
delivery;



return(


<div className="
bg-white
rounded-2xl
shadow-xl
p-6
mt-8
">


<h2 className="
text-3xl
font-bold
mb-6
">

🧾 Bill Summary

</h2>



{

cartItems.length===0

?

<p className="text-gray-500">

No items added

</p>


:


cartItems.map(item=>(


<div

key={item.id}

className="
border-b
pb-4
mb-4
"


>


<div className="
flex
justify-between
font-bold
">


<span>

{item.name}

</span>


<span>

₹{item.price*item.quantity}

</span>


</div>



<div className="
flex
gap-3
mt-3
items-center
">


<button

onClick={()=>decreaseQuantity(item.id)}

className="
bg-gray-200
px-3
rounded
"

>

-

</button>



<span>

{item.quantity}

</span>




<button

onClick={()=>increaseQuantity(item.id)}

className="
bg-green-700
text-white
px-3
rounded
"

>

+

</button>




<button

onClick={()=>removeFromCart(item.id)}

className="
text-red-600
ml-auto
"

>

Remove

</button>


</div>


</div>


))


}




<div className="space-y-3 text-lg">


<div className="flex justify-between">

<span>
Subtotal
</span>

<span>
₹{subtotal.toFixed(0)}
</span>

</div>



<div className="flex justify-between">

<span>
GST 5%
</span>

<span>
₹{gst.toFixed(0)}
</span>

</div>



<div className="flex justify-between">

<span>
Platform Fee
</span>

<span>
₹{platformFee}
</span>

</div>




<div className="flex justify-between">

<span>
Delivery
</span>

<span>
₹{delivery}
</span>

</div>



<hr/>

<div className="
flex
justify-between
text-2xl
font-bold
text-green-700
">


<span>
Total
</span>


<span>
₹{total.toFixed(0)}
</span>


</div>



</div>


</div>


);


}


export default BillSummary;