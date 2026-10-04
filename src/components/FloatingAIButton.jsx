import { useState } from "react";
import AIChat from "./AIChat";

function FloatingAIButton(){const [open,setOpen]=useState(false);return <><button type="button" onClick={()=>setOpen(true)} className="fixed bottom-7 right-7 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-[#ff9a67]/30 bg-[#ff6b2b] text-3xl text-white shadow-[0_15px_40px_rgba(255,107,43,.35)] transition hover:scale-110">🤖</button>{open&&<AIChat onClose={()=>setOpen(false)}/>}</>}
export default FloatingAIButton;