import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/contact";
import { Post } from "./pages/Post";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/pages/about",
        element: <About />
    },
    {
        path: "/pages/contact",
        element: <Contact />
    },
    {
        path: "/pages/post/:id",
        element: <Post />
    }
]
)