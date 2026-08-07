import { useEffect, useState } from "react";

import { getAllPlatforms } from "../services/PlatformService";

import PlatformCard from "./PlatformCard";

import BillSummary from "./BillSummary";
 



function ComparePrices({ food, onClose }) {


    const [platforms, setPlatforms] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        if(food){

            loadPlatforms();

        }

    }, [food]);




    const loadPlatforms = async () => {


        try {


            setLoading(true);


            const data = await getAllPlatforms();



            const filtered = data.filter(

                (item)=>

                item.food?.id === food.id

            );



            setPlatforms(filtered);



        }

        catch(error){


            console.log(
                "Platform Error:",
                error
            );


            setPlatforms([]);


        }

        finally{


            setLoading(false);


        }


    };





    return (


        <div

        className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
        p-5
        "

        >



            <div

            className="
            bg-white
            rounded-2xl
            p-8
            w-full
            max-w-6xl
            max-h-[90vh]
            overflow-y-auto
            "

            >



                {/* HEADER */}


                <div

                className="
                flex
                justify-between
                items-center
                mb-8
                "

                >



                    <div>


                        <h2

                        className="
                        text-3xl
                        font-bold
                        "

                        >

                            🍔 Compare Prices

                        </h2>


                        <p className="text-gray-500 mt-2">

                            {food.name}

                        </p>


                    </div>





                    <button

                    onClick={onClose}

                    className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    transition
                    cursor-pointer
                    "

                    >

                        Close

                    </button>



                </div>







                {/* PLATFORM LIST */}



                <h3

                className="
                text-2xl
                font-bold
                mb-5
                "

                >

                    🏪 Compare Available Platforms

                </h3>





                {

                loading ?

                (

                    <div className="text-center py-10">


                        <h2 className="text-xl">

                            Loading platforms...

                        </h2>


                    </div>

                )


                :


                platforms.length === 0 ?

                (

                    <div

                    className="
                    text-center
                    py-10
                    text-gray-500
                    "

                    >

                        No platforms available

                    </div>


                )


                :


                (

                    <div

                    className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                    "

                    >


                        {

                        platforms.map((platform)=>(


                            <PlatformCard

                            key={platform.id}

                            platform={platform}


                            />


                        ))


                        }


                    </div>


                )


                }







                {/* BILL SUMMARY */}



                <div className="mt-10">


                    <BillSummary/>


                </div>







                {/* CHECKOUT */}

 


            </div>



        </div>


    );

}



export default ComparePrices;