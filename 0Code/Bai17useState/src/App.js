import React, { useState } from 'react';

function App(props) {
  const [count, setCount ] = useState(0);

  function handleCout()
  {
    console.log("Tăng");
    setCount(count +1);
  }

  function handleCout1(data)
  {
    console.log(data);
    setCount(count - 1);
  }
  
  return (
    <div>
       {count}
       <button onClick={handleCout}>Tăng</button>
       <button onClick={()=>handleCout1("Giảm")}>Giảm</button>
    </div>
  );
}

export default App;