import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./Utils/firebase";
import { useDispatch } from "react-redux";
import { addLogin, removeLogin } from "./Utils/userSlice";
let Body=()=>{
    let dispatch= useDispatch();
    let appRouter = createBrowserRouter(
        [
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/browser",
                element:<Browser />
            }
        ]
    )
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            
            const {uid,email,displayName,photoURL} = user;
            dispatch(addLogin({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        } else {
            dispatch(removeLogin)
        }
        });
    },[])
    return(
        <div className="w-full overflow-hidden">
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;