import React, { useEffect, useRef, useState } from "react";

export default function App16() {
  const [num, setNum] = useState(0);
  const prevNum = useRef(0);
  const msgRef = useRef();

  useEffect(() => {
    if (msgRef.current) {
      if (num > prevNum.current) {
        msgRef.current.style.color = "green";
      } else if (num < prevNum.current) {
        msgRef.current.style.color = "red";
      }
    }
    prevNum.current = num;
  }, [num]);

  return (
    <div>
      <h1>App16</h1>
      <h2>useRef to store previous value</h2>
      <p>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </p>
      <hr />
      <p>Current Number: {num}</p>
      <p>Previous Number: {prevNum.current}</p>
      <h3 ref={msgRef}>Hello World</h3>
    </div>
  );
}