import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className="border container w-full h-screen duration-200 flex justify-center" style={{backgroundColor:color}}>
      <div className="flex flex-wrap justify-center fixed bottom-1 gap-2 px-3 py-1 bg-white rounded-xl">
        <div>
          <button className="rounded-lg text-white p-1" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}> Red</button>
        </div>
        <div>
          <button className="rounded-lg text-white p-1" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        </div>
        <div>
          <button className="rounded-lg text-white p-1" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        </div>
        <div>
          <button className="rounded-lg text-white p-1" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
        </div>
        <div>
          <button className="rounded-lg text-white p-1" style={{backgroundColor:"grey"}} onClick={()=>setColor("grey")}>Grey</button>
        </div>
        <div>
          <button className="rounded-lg text-black p-1" style={{backgroundColor:"Yellow"}} onClick={()=>setColor("yellow")}> Red</button>
        </div>
        <div>
          <button className="rounded-lg text-black p-1" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        </div>
        <div>
          <button className="rounded-lg text-white p-1" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
        </div>
        <div>
          <button className="rounded-lg text-black p-1" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
        </div>
        <div>
          <button className="rounded-lg text-white p-1" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
        </div>

      </div>
    </div>
  )
}

export default App
