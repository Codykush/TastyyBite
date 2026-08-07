import { useCart } from "../context/CartContext";


function PlatformCard({platform}){


    const {addToCart}=useCart();



    const addFood=()=>{


        addToCart({

            id:platform.food.id,

            name:platform.food.name,

            price:platform.price,

            platform:platform.platform,

            orderUrl:platform.orderUrl,

            deliveryTime:platform.deliveryTime

        });


    };



    return(

        <div
        className="
        bg-white
        rounded-xl
        shadow-lg
        p-5
        hover:shadow-2xl
        transition
        "
        >


            <h2 className="text-xl font-bold">

                {platform.platform}

            </h2>



            <p className="text-gray-500 mt-2">

                🚚 {platform.deliveryTime} mins

            </p>




            <h3 className="
            text-3xl
            font-bold
            text-red-600
            mt-3
            ">

                ₹{platform.price}

            </h3>




            <div className="flex gap-3 mt-5">


                <button

                onClick={addFood}

                className="
                bg-green-700
                hover:bg-green-800
                text-white
                px-5
                py-2
                rounded-lg
                "

                >

                + Add

                </button>





                <button

                onClick={()=>{

                    window.open(
                        platform.orderUrl,
                        "_blank"
                    )

                }}

                className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-5
                py-2
                rounded-lg
                "

                >

                Order

                </button>


            </div>


        </div>


    );


}


export default PlatformCard;