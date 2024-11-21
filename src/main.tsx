import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import routes from "./routers/routes.tsx";
import theme from "./styles/theme.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes} future={{ v7_startTransition: true }}/>
        </ThemeProvider>
    </StrictMode>
);
