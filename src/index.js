import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Toggler from "./Toggler";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Toggler />
  </StrictMode>
);
