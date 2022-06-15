import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import GoogleAnalytics from "react-ga";


//GoogleAnalytics
GoogleAnalytics.initialize("UA-232132588-1");

GoogleAnalytics.pageview("/home");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
