import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { Chemist, Otros } from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Chemist />
    <Otros />
  </StrictMode>
);
