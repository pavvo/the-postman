import { BrowserRouter } from "react-router-dom";

import Router from "@/router/Router";
import { AppProvider } from "@/context/AppContext";

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
    </BrowserRouter>
  );
}
