import { Navigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";

function ProtectedRoute({ children }) {

  const [user, loading] = useAuthState(auth);

  if (loading) {

    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );

  }

  if (!user) {

    return <Navigate to="/login" replace />;

  }

  return children;

}

export default ProtectedRoute;