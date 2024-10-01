import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <PrimeReactContext.Provider value={{ ripple: true }}>
        <App />
      </PrimeReactContext.Provider>
    </PrimeReactProvider>
  </StrictMode>
);
