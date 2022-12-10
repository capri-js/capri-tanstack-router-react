import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter } from "./router";
import { RouterProvider } from "@tanstack/react-router";

import { PreviewBanner } from "./components/PreviewBanner.jsx";

const router = createRouter();

ReactDOM.createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <PreviewBanner />
    <RouterProvider router={router} />
  </StrictMode>
);
