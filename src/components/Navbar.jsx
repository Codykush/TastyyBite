import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import { signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import { useState } from "react";

import AIChat from "./AIChat";


function Navbar() {


  const navigate = useNavigate();


  const [user] = useAuthState(auth);


  const [showChat, setShowChat] = useState(false);



  const logout = async () => {


    await signOut(auth);


    localStorage.removeItem("token");


    navigate("/");


  };



  return (


    <>


      <nav className="bg-white shadow-lg sticky top-0 z-50">


        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">



          {/* Logo */}


          <Link

            to="/"

            className="text-3xl font-bold text-red-500 cursor-pointer"

          >

            🍔 TastyyBite

          </Link>





          {/* Menu */}


          <div className="hidden md:flex items-center gap-10 text-lg font-medium">


 



            <button

              onClick={() => setShowChat(true)}

              className="hover:text-red-500 transition cursor-pointer"

            >

              🤖 AI Food Partner

            </button>



          </div>






          {/* Login / Profile */}



          {

            user ?


            (

              <div className="flex items-center gap-4">


                <span className="font-semibold">


                  👋 {user.displayName}


                </span>




                <button


                  onClick={logout}


                  className="
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-5
                  py-2
                  rounded-lg
                  transition
                  cursor-pointer
                  "


                >

                  Logout


                </button>


              </div>


            )


            :


            (


              <button


                onClick={() => navigate("/login")}


                className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-6
                py-2
                rounded-lg
                transition
                cursor-pointer
                "


              >

                Login


              </button>


            )


          }



        </div>


      </nav>





      {/* Bite AI Chat */}


      {

        showChat &&

        (

          <AIChat

            onClose={() => setShowChat(false)}

          />

        )

      }



    </>


  );

}



export default Navbar;