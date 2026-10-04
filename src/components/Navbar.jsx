import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import AIChat from "./AIChat";

function Navbar(){
    const navigate=useNavigate();
    const [user]=useAuthState(auth);
    const [showChat,setShowChat]=useState(false);
    const [open,setOpen]=useState(false);
    const logout=async()=>{await signOut(auth);localStorage.removeItem("token");navigate("/")};

    return(
        <>
            <header className="sticky top-0 z-50 border-b border-[#211e1b] bg-[#0b0b0b]/90 backdrop-blur-xl">
                <div className="tb-container">
                    <div className="flex h-20 items-center justify-between gap-4">
                        <Link to="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff6b2b] text-2xl shadow-lg shadow-orange-950/30">🍔</div>
                            <div><div className="text-xl font-black text-[#fff8ef]">Tasty<span className="text-[#ff6b2b]">Bite</span></div><div className="text-[9px] font-bold uppercase tracking-[.22em] text-[#786e66]">Eat smart</div></div>
                        </Link>
                        <div className="hidden items-center gap-4 md:flex">
                            <button type="button" onClick={()=>setShowChat(true)} className="tb-dark-button">🤖 Bite AI</button>
                            {user?<div className="flex items-center gap-3"><span className="max-w-[170px] truncate text-sm font-bold text-[#d7ccc2]">👋 {user.displayName||"Food lover"}</span><button type="button" onClick={logout} className="tb-orange-button">Logout</button></div>:<button type="button" onClick={()=>navigate("/login")} className="tb-orange-button">Login</button>}
                        </div>
                        <button type="button" onClick={()=>setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#332d28] bg-[#171513] text-xl md:hidden">{open?"×":"☰"}</button>
                    </div>
                    {open&&<div className="border-t border-[#29241f] py-4 md:hidden"><div className="flex flex-col gap-2">
                        <button type="button" onClick={()=>{setShowChat(true);setOpen(false)}} className="rounded-xl px-4 py-3 text-left font-bold text-[#fff8ef] hover:bg-[#171513]">🤖 Bite AI</button>
                        {user?<button type="button" onClick={()=>{logout();setOpen(false)}} className="rounded-xl bg-[#ff6b2b] px-4 py-3 text-left font-bold text-white">Logout</button>:<button type="button" onClick={()=>{navigate("/login");setOpen(false)}} className="rounded-xl bg-[#ff6b2b] px-4 py-3 text-left font-bold text-white">Login</button>}
                    </div></div>}
                </div>
            </header>
            {showChat&&<AIChat onClose={()=>setShowChat(false)}/>}
        </>
    );
}
export default Navbar;