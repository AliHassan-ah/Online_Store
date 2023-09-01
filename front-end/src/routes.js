import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Index from "./Pages/Index";
    const routes = [
        {
            path:'/',
            element:<Index/>
        },
        {
            path:'/sign-up',
            element:<SignUp/>
        },
        {
            path:'/log-in',
            element:<LogIn/>
        },

    ]
    export default routes;