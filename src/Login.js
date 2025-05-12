import { useState,useRef } from "react";
import { Validiation } from "./Utils/Validation";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "./Utils/firebase";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLogin } from "./Utils/userSlice";

let Login=()=>{
  let dispatch=useDispatch()
    let navigate= useNavigate()
    let [issignin,setissignin]=useState(true)
    let [errormessage,seterrormessage]=useState(null);
    let name=useRef()
    let email=useRef();
    let password =useRef();
    let togglesignin=()=>{
        setissignin(!issignin)
    }
    let checkValidation=()=>{
       let message = Validiation(email.current.value, password.current.value)
       
      if(message) return ;
      if(!issignin){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
            updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
            
          }
          
        ).then(() => {
           const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addLogin({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          }).catch((error) => {
            // An error occurred
            // ...
          });
          navigate("/browser")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage("Password is Week use(cap, num,#@")
          // ..
        });
      }else{
           signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/browser")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormessage(errorCode+" "+errorMessage)
          });
      }
    }
    return(
      <div className="bg-login">
        <Header />
      <div className="row flex justify-content-center align-items-center py-2">
        <div className="col-10 col-md-4 ">
              <form onSubmit={(e)=>e.preventDefault()} className="bg-form text-white bg-opacity-50 py-6 px-12 my-12  rounded-lg">
            <h1 className="text-sm my-1 login-head ">{issignin?"Sign in":"Sign UP"}</h1>
            {
                !issignin&&  <input type="text" ref={name} placeholder="Full Name" className="bg-gray-600 py-2 my-3 px-2 w-full rounded-sm" ></input> 
            }
            <input ref={email} type="text" placeholder="Email Id" className="bg-gray-600 py-2 my-3 px-2 w-full rounded-sm" ></input>
            <input ref={password} type="password" placeholder="Password" className="bg-gray-600 py-2 my-3 px-2 w-full rounded-sm" ></input>
           <p className="text-lg my-1 text-red-700">{errormessage}</p>
            <button className="bg-red-800 py-2 my-3 px-2 w-full rounded-sm" onClick={checkValidation}>Sing In</button>

            <p className="py-2 my-2 px-2 cursor-pointer" onClick={togglesignin}>{issignin?"New to Netflix? Sign up now.": "Already i have account? Sign in now."}</p>
        </form>
        </div>
      </div>
       
      </div>
    )
}
export default Login;