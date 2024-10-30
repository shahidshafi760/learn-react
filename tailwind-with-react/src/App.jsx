import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="bg-green-400 text-black rounded px-4 py-1 mb-4">
        Tailwind test
      </h2>
      <Card username="Shahid" btn="Read More."/>
      <Card username="Faizan" btn="Learn More."/>
      <Card username="Haris" />
    </>
  );
}

export default App;
