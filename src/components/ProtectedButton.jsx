import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function ProtectedButton({ children, onClick, className = "" }) {

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleClick = () => {

    if (!user) {

      navigate("/login");

      return;

    }

    if (onClick) {

      onClick();

    }

  };

  return (

    <button
      onClick={handleClick}
      className={`bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition cursor-pointer ${className}`}
    >

      {children}

    </button>

  );

}

export default ProtectedButton;