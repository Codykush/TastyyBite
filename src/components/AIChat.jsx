import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import api from "../services/api";

function AIChat({ onClose }) {

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text:
                "👋 Hi! I'm Bite, your AI Food Partner.\n\nAsk me about pizzas, burgers, offers, restaurants or meals.",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const sendMessage = async () => {

        if (!input.trim() || loading) {
            return;
        }

        const message = input.trim();

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: message,
            },
        ]);

        setInput("");
        setLoading(true);

        try {

            const response = await api.post("/api/chat", {
                message: message,
            });

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text:
                        response.data?.response ||
                        "Sorry, I couldn't understand that.",
                },
            ]);

        } catch (error) {

            console.error("AI Chat Error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "❌ Sorry, Bite is unavailable right now.",
                },
            ]);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-28 right-8 bg-white rounded-3xl shadow-2xl w-[400px] h-[600px] flex flex-col overflow-hidden z-50">

            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-5 flex justify-between">

                <div>
                    <h2 className="font-bold text-xl">
                        🤖 Bite
                    </h2>

                    <p className="text-sm">
                        Your AI Food Partner
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="text-2xl"
                >
                    ✕
                </button>

            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">

                {messages.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        sender={msg.sender}
                        text={msg.text}
                    />
                ))}

                {loading && (
                    <ChatMessage
                        sender="ai"
                        text="Thinking... 🤔"
                    />
                )}

                <div ref={chatEndRef}></div>

            </div>

            <div className="p-4 border-t flex gap-3">

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
                    className="flex-1 border rounded-xl px-4 py-3"
                    placeholder="Ask Bite..."
                    disabled={loading}
                />

                <button
                    onClick={sendMessage}
                    disabled={loading}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white px-5 rounded-xl"
                >
                    {loading ? "..." : "Send"}
                </button>

            </div>

        </div>
    );
}

export default AIChat;