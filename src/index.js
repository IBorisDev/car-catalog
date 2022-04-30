import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import AppLayout from "./components/AppLayout";
import CarCatalog from "./pages/CarCatalog";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <CarCatalog />
      </AppLayout>
    </QueryClientProvider>
  </React.StrictMode>
);
