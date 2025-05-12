import { signOut } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header=()=>{
    let user= useSelector(store=>store.user)
    
    let navigate = useNavigate()
    
    let handlingsingout=()=>{
        
        signOut(auth).then(() => {
       
         navigate("/")
         
        }).catch((error) => {
        // An error happened.
        });
    }
    
    console.log(user?.email)
    return(
       <div>
         <div className=" bg-gradient-to-b from-black z-10 flex justify-content-between">
            <div className="">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="logo py-2 px-1" alt="logo"></img>
            </div>
            
             <div className="flex p-1 px-4">
            <p className="mx-3 text-white my-4"> {user?.displayName}</p>
               <img className="w-10 h-10  rounded-2 my-3 " src={user?.photoURL}  alt="img"></img>
               <button className=" mx-3 p-2 h-10  bg-red-700 text-sm text-white my-3 rounded-2" onClick={handlingsingout}>
               Singout</button>
            </div>

        
        </div>
       </div>
    )
}
export default Header