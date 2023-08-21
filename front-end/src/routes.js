    import HomePage from "./Pages/HomePage/HomePage";
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

    ]
    export default routes;