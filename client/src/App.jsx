import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex flex-col justify-center items-center mt-20  ">
      <h1 className=" text-4xl text-indigo-400 font-bold flex items-center justify-center ">NFT Gallery</h1>
    </div>
  );
}

export default App;
