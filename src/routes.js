import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Product from "./Pages/Product/Product"
import LoginPage from "./Pages/Login/LoginPage"
import SignUp from "./Pages/Signup/Signup"
import Profile from "./Pages/UserProfile/Profile"
import Info from "./Pages/UserProfile/info/Info"

let routes = [
    { path: "/", element: <Home />},
    { path: "/homepage", element: <Home />},
    { path: "/Products", element: <Products />},
    { path: "/Product/:id", element: <Product />},
    { path: "/About", element: <About />},
    { path: "/Contact", element: <Contact />},
    { path: "/profile", element: <Profile />},
    { path: "/users/login", element: <LoginPage />},
    { path: "/users/signup", element: <SignUp />},
    { path: "/profile/personal-info", element: <Info />},
]


export default routes