import { useState } from "react";


function BillEstimator({ food }) {


    const [people, setPeople] = useState(1);


    const foodPrice = food.price * people;


    const gst = foodPrice * 0.05;


    const platformFee = 8;


    const deliveryCharge = food.deliveryTime <= 25 ? 40 : 25;


    const total =
        foodPrice +
        gst +
        platformFee +
        deliveryCharge;



    return (

        <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">


            <h2 className="text-3xl font-bold mb-6">

                🧾 Bill Summary

            </h2>



            {/* People */}

            <div className="flex items-center gap-4 mb-6">


                <label className="font-semibold">

                    Number of People

                </label>


                <input

                    type="number"

                    min="1"

                    max="20"

                    value={people}

                    onChange={(e)=>
                        setPeople(Number(e.target.value))
                    }

                    className="
                    border
                    rounded-lg
                    p-2
                    w-20
                    "

                />


            </div>




            <div className="space-y-4 text-lg">


                <div className="flex justify-between">

                    <span>
                        Food Price
                    </span>

                    <span>
                        ₹{foodPrice.toFixed(0)}
                    </span>

                </div>




                <div className="flex justify-between">

                    <span>
                        GST (5%)
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
                        Delivery Charge
                    </span>


                    <span>
                        ₹{deliveryCharge}
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
                        Total Amount
                    </span>


                    <span>
                        ₹{total.toFixed(0)}
                    </span>


                </div>


            </div>


        </div>

    );

}


export default BillEstimator;