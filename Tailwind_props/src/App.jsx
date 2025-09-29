import { useState } from "react"

function App() {
  const [color, setColor] = useState("lightgreen");
  return (
    <div className="w-full h-screen duration-150 " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-2xl px-3 py-3">

          <button className="outline-none px-3 py-2 rounded-2xl" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>

          <button className="outline-none px-3 py-2 rounded-2xl" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>

          <button className="outline-none px-3 py-2 rounded-2xl" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>yellow</button>

        </div>
      </div>
    </div >
  )
}

export default App
