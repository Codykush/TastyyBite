import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <div className="container mt-5">

            <h1 className="mb-4">
                🍽 TastyyByte Admin Dashboard
            </h1>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h4>Add Food</h4>

                            <p>Add new food items.</p>

                            <Link
                                className="btn btn-primary"
                                to="/admin/add-food">

                                Open

                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h4>Manage Foods</h4>

                            <p>Edit or delete foods.</p>

                            <Link
                                className="btn btn-success"
                                to="/admin/manage-foods">

                                Open

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;