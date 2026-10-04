import { useEffect,useRef,useState } from "react";
import ChatMessage from "./ChatMessage";
import api from "../services/api";

function AIChat({onClose}){
    const [messages,setMessages]=useState([{sender:"ai",text:"👋 Hi! I'm Bite, your AI Food Partner.\n\nAsk me about pizzas, burgers, offers, restaurants or meals."}]);
    const [input,setInput]=useState("");const [loading,setLoading]=useState(false);const chatEndRef=useRef(null);
    useEffect(()=>{chatEndRef.current?.scrollIntoView({behavior:"smooth"})},[messages]);
    const sendMessage=async()=>{if(!input.trim()||loading)return;const message=input.trim();setMessages(prev=>[...prev,{sender:"user",text:message}]);setInput("");setLoading(true);try{const response=await api.post("/api/chat",{message});setMessages(prev=>[...prev,{sender:"ai",text:response.data?.response||"Sorry, I couldn't understand that."}])}catch(error){console.error("AI Chat Error:",error);setMessages(prev=>[...prev,{sender:"ai",text:"❌ Sorry, Bite is unavailable right now."}])}finally{setLoading(false)}};
    return <div className="fixed bottom-6 right-4 z-[99999] flex h-[650px] w-[calc(100vw-32px)] max-w-[420px] flex-col overflow-hidden rounded-[30px] border border-[#3b332d] bg-[#0d0d0d] shadow-[0_30px_100px_rgba(0,0,0,.8)] sm:right-8">
        <div className="shrink-0 border-b border-[#302a25] bg-gradient-to-r from-[#24150d] to-[#14110f] p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6b2b] text-2xl">🤖</div><div><h2 className="font-black text-[#fff8ef]">Bite</h2><p className="text-xs font-semibold text-[#a99e94]">Your AI Food Partner</p></div></div><button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3b332d] bg-[#1c1917] text-xl text-[#fff8ef]">×</button></div></div>
        <div className="flex-1 overflow-y-auto bg-[#0b0b0b] p-4">{messages.map((msg,index)=><ChatMessage key={index} sender={msg.sender} text={msg.text}/>)}{loading&&<ChatMessage sender="ai" text="Bite is thinking... 🤔"/>}<div ref={chatEndRef}/></div>
        <div className="border-t border-[#302a25] bg-[#11100f] p-4"><div className="flex gap-2"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")sendMessage()}} className="tb-input" placeholder="Ask Bite..." disabled={loading}/><button type="button" onClick={sendMessage} disabled={loading} className="tb-orange-button px-5 disabled:opacity-50">{loading?"...":"→"}</button></div></div>
    </div>;
}
export default AIChat;