import { useState } from "react";
let Login=()=>{
    let [issignin,setissignin]=useState(true)
    let togglesignin=()=>{
        setissignin(!issignin)
    }
    return(
      <div className="bg-login">
        <div>
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="logo py-2 px-1" alt="logo"></img>

        </div>
        <form className="bg-form text-white bg-opacity-50 py-12 px-12 w-4/12 mx-auto my-12">
<h1 className="text-xl my-1 font-bold">{issignin?"Sign in":"Sign UP"}</h1>
{
       !issignin&&  <input type="text" placeholder="Full Name" className="bg-gray-600 py-2 my-3 px-2 w-full rounded-sm" ></input> 
}
        <input type="text" placeholder="Email Id" className="bg-gray-600 py-2 my-3 px-2 w-full rounded-sm" ></input>
        <input type="password" placeholder="Password" className="bg-gray-600 py-2 my-3 px-2 w-full rounded-sm" ></input>
<button className="bg-red-800 py-2 my-3 px-2 w-full rounded-sm">Sing In</button>

 <p className="py-2 my-3 px-2 cursor-pointer" onClick={togglesignin}>{issignin?"New to Netflix? Sign up now.": "Already i have account? Sign in now."}</p>
        </form>
       
      </div>
    )
}
export default Login;