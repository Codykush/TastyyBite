import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function ProtectedButton({children,onClick,className=""}){
    const navigate=useNavigate();const [user]=useAuthState(auth);
    const handleClick=()=>{if(!user){navigate("/login");return}if(onClick)onClick()};
    return <button type="button" onClick={handleClick} className={`flex-1 rounded-xl border border-[#3d352e] bg-[#211e1b] px-4 py-3 text-sm font-black text-[#fff8ef] transition hover:border-[#635449] hover:bg-[#2a2521] ${className}`}>{children}</button>;
}
export default ProtectedButton;