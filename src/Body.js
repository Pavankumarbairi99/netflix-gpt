import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
let Body=()=>{
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
    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;