    import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
    const routes = [
        {
            path:'/',
            element:<HomePage/>
        },
        {
            path:'/sign-up',
            element:<SignUp/>
        },
        {
            path:'/sign-in',
            element:<SignIn/>
        },

    ]
    export default routes;