import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const googleLogin = async () => {

    try{

      await signInWithPopup(auth, googleProvider);

      navigate("/");

    }
    catch(err){

      console.log(err);

      alert("Login Failed");

    }

  };

  return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400">

<div className="bg-white rounded-3xl shadow-2xl p-10 w-[420px]">

<h1 className="text-4xl font-bold text-center text-red-600">

🍔 TastyyBite

</h1>

<p className="text-center text-gray-500 mt-3">

Find the Best Meal

Compare Prices

Save Money

</p>

<div className="mt-10">

<button

onClick={googleLogin}

className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-4 text-lg font-semibold transition"

>

Continue with Google

</button>

</div>

<div className="mt-8 text-center">

<p className="text-gray-400">

Unlock Premium Features

</p>

<ul className="text-left mt-4 text-gray-600 space-y-2">

<li>

✅ Compare Every Platform

</li>

<li>

✅ AI Food Recommendation

</li>

<li>

✅ Personalized Deals

</li>

<li>

✅ Save Favourite Meals

</li>

<li>

✅ Budget Planner

</li>

</ul>

</div>

</div>

</div>

);

}

export default Login;