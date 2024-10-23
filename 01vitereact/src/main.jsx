import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const Naav ="Shahid"

const MyName = <h1>{Naav}(here i am using evaluated expression)</h1>

const ReactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me',
    MyName
)


createRoot(document.getElementById("root")).render(
    ReactElement
);
