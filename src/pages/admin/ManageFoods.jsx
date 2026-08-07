import { useEffect, useState } from "react";
import { getAllFoods, deleteFood } from "../../services/FoodService";
import { Link } from "react-router-dom";


function ManageFoods() {


    const [foods, setFoods] = useState([]);



    useEffect(() => {

        loadFoods();

    }, []);



    const loadFoods = async () => {

        try {

            const response = await getAllFoods();

            setFoods(response.data);

        }

        catch(error){

            console.log(error);

        }

    };



    const handleDelete = async (id)=>{


        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this food?"
            );


        if(confirmDelete){


            try{


                await deleteFood(id);


                alert("Food Deleted");


                loadFoods();


            }

            catch(error){

                console.log(error);

                alert("Delete Failed");

            }

        }


    };




    return (

        <div className="container mt-5">


            <h2>
                🍔 Manage Foods
            </h2>


            <Link
                to="/admin/add-food"
                className="btn btn-primary mb-3"
            >

                Add New Food

            </Link>




            <table className="table table-bordered">


                <thead>


                    <tr>

                        <th>
                            Image
                        </th>


                        <th>
                            Name
                        </th>


                        <th>
                            Price
                        </th>


                        <th>
                            Category
                        </th>


                        <th>
                            Offer
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>




                <tbody>


                {
                    foods.map((food)=>(


                        <tr key={food.id}>


                            <td>


                                {
                                    food.imageUrl &&

                                    <img
                                    src={
                                    "http://3.110.136.211:8080/images/"
                                    +food.imageUrl
                                    }
                                    width="80"
                                    height="80"
                                    alt={food.name}
                                    />

                                }


                            </td>



                            <td>

                                {food.name}

                            </td>




                            <td>

                                ₹{food.price}

                            </td>




                            <td>

                                {food.category}

                            </td>




                            <td>

                                {food.offerPercentage}%

                            </td>




                            <td>


                                <button
                                className="btn btn-danger"
                                onClick={()=>
                                handleDelete(food.id)}
                                >

                                Delete

                                </button>


                            </td>



                        </tr>


                    ))
                }


                </tbody>


            </table>



        </div>

    );


}


export default ManageFoods;