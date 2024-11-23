import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import routes from "./routers/routes.tsx";
import GlobalStyle from "./styles/globalStyle.ts";
import theme from "./styles/theme.ts";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterProvider
                    router={routes}
                    future={{ v7_startTransition: true }}
                />
            </ThemeProvider>
        </QueryClientProvider>
    </StrictMode>
);
