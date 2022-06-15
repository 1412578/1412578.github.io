import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import GoogleAnalytics from "react-ga";
import GoogleAnalytics4 from "react-ga4";


//GoogleAnalytics
GoogleAnalytics.initialize("UA-232132588-1");
GoogleAnalytics4.initialize("G-RFMRQB5BY4");

GoogleAnalytics.pageview("/home");
GoogleAnalytics4.send("pageview");


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
