import { useState, useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";


function AIChat({ onClose }) {


    const [messages, setMessages] = useState([

        {
            sender: "ai",
            text: "👋 Hi! I'm Bite, your AI Food Partner.\n\nAsk me about pizzas, burgers, offers, restaurants or meals."
        }

    ]);


    const [input, setInput] = useState("");


    // Auto scroll reference
    const chatEndRef = useRef(null);



    // Scroll whenever messages update
    useEffect(() => {

        chatEndRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages]);




    const sendMessage = async () => {


        if (!input.trim()) return;



        const userMessage = {

            sender: "user",

            text: input

        };



        setMessages(prev => [

            ...prev,

            userMessage

        ]);



        setInput("");



        // Backend API call

        try {


            const response = await fetch(
                "http://3.110.136.211:8080/api/chat",
                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        message: input

                    })

                }

            );



            const data = await response.json();



            const aiMessage = {

                sender: "ai",

                text: data.response

            };



            setMessages(prev => [

                ...prev,

                aiMessage

            ]);



        } catch(error) {


            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: "❌ Sorry, Bite is unavailable right now."

                }

            ]);

        }


    };





    return (


        <div className="fixed bottom-28 right-8 bg-white rounded-3xl shadow-2xl w-[400px] h-[600px] flex flex-col overflow-hidden z-50">



            {/* Header */}

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






            {/* Chat Area */}

            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">



                {

                    messages.map((msg,index)=>(


                        <ChatMessage

                            key={index}

                            sender={msg.sender}

                            text={msg.text}

                        />


                    ))

                }



                {/* Auto scroll target */}

                <div ref={chatEndRef}></div>



            </div>







            {/* Input Area */}

            <div className="p-4 border-t flex gap-3">



                <input


                    value={input}


                    onChange={(e)=>setInput(e.target.value)}


                    onKeyDown={(e)=>{


                        if(e.key==="Enter")

                            sendMessage();


                    }}


                    className="flex-1 border rounded-xl px-4 py-3"


                    placeholder="Ask Bite..."

                />





                <button


                    onClick={sendMessage}


                    className="bg-red-500 hover:bg-red-600 text-white px-5 rounded-xl"


                >

                    Send

                </button>



            </div>




        </div>


    );

}


export default AIChat;