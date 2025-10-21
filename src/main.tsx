import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "./core/providers/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

import { Suspense } from "react";
import "./core/lib/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="...loading">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  </StrictMode>,
);
