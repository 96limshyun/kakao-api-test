import Navigation from "@components/Layout/Navigation";
import { createBrowserRouter } from "react-router-dom";

import BookSearch from "@/pages/BookSearch";
import FavoriteBook from "@/pages/FavoriteBook";

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Navigation />,
            children: [
                {
                    path: "/",
                    element: <BookSearch />,
                },
                {
                    path: "favoriteBook",
                    element: <FavoriteBook />,
                },
            ],
        },
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

export default routes;
