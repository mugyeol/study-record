// import React, { useState } from "react";

// import "./App.css";

// function App() {
//   const BadCounter = () => {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//       setCount(count + 1);
//       setCount(count + 1);
//     };

//     return (
//       <div>
//         <button onClick={incrementCount}>BadCounter</button>
//         <div>{count}</div>
//       </div>
//     );
//   };

//   const GoodCounter = () => {
//     const [count, setCount] = useState(0);
    

//     const incrementCount = () => {
//       setCount((count) => count + 1);
//       setCount((count) => count + 1);
//     };

//     return (
//       <div>
//         <button onClick={incrementCount}>GoodCounter</button>
//         <div>{count}</div>
//       </div>
//     );
//   };
//   return (
//     <div className="layout">
//       <BadCounter />
//       <GoodCounter />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
// import "./styles.css";

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [counter1, counter2, counter3]);

  const handleClickAsync = async () => {
    await setCounter1(counter1 + 1);
    setCounter2(counter2 + 1);
    setCounter3(counter3 + 1);
  }

  const handleClickThen = () => {
    Promise.resolve().then(res => {
      setCounter1(counter1 + 1);
      setCounter2(counter2 + 1);
      setCounter3(counter3 + 1);
    });
  }

  return (
    <div className='App'>
      <h1>Function Component</h1>
      <div>
        Counter1: {counter1}
      </div>
      <div>
        Counter2: {counter2}
      </div>
      <div>
        Counter3: {counter3}
      </div>
      <br/>
      <div>Component was rendered {renderCount} times</div>
      <button onClick={handleClickAsync}>Async handler</button>
      <button onClick={handleClickThen}>Then handler</button>
    </div>
  );
}
