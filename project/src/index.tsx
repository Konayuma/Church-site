import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChurchSite } from "./screens/ChurchSite/ChurchSite";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ChurchSite />
  </StrictMode>,
);
