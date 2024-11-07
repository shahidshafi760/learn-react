import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="h-screen w-full duration-200 flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 gap-4 px-8 py-4 rounded-xl"
        style={{ backgroundColor: "white" }}
      >
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 rounded-2xl text-orange-300"
          style={{ backgroundColor: "red" }}
        >
          red
        </button>
        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 rounded-2xl text-orange-300"
          style={{ backgroundColor: "green" }}
        >
          green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 rounded-2xl text-orange-300"
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>
        <button
          onClick={() => setColor("purple")}
          className="px-4 py-2 rounded-2xl text-orange-300"
          style={{ backgroundColor: "purple" }}
        >
          purple
        </button>
      </div>
    </div>
  );
}

export default App;
