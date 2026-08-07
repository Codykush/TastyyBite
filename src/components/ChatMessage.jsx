function ChatMessage({ sender, text }) {

    return (

        <div

            className={`mb-4 flex ${

                sender === "user"

                    ? "justify-end"

                    : "justify-start"

            }`}

        >

            <div

                className={`max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-line ${

                    sender === "user"

                        ? "bg-red-500 text-white"

                        : "bg-white shadow"

                }`}

            >

                {text}

            </div>

        </div>

    );

}

export default ChatMessage;