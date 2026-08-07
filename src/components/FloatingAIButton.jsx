import { useState } from "react";
import AIChat from "./AIChat";

function FloatingAIButton() {

    const [open, setOpen] = useState(false);

    return (

        <>

            <button

                onClick={() => setOpen(true)}

                className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-2xl hover:scale-110 duration-300 text-white text-3xl cursor-pointer"

            >

                🤖

            </button>

            {

                open &&

                <AIChat

                    onClose={() => setOpen(false)}

                />

            }

        </>

    );

}

export default FloatingAIButton;