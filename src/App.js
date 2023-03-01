import logo from "./logo.svg";
import "./App.css";

import { useEffect, useRef, useState } from "react";
function App() {
  // let db = [1,2,3,4]


  

  const [data, setdata] = useState([1, 2, 3, 4]);

  const handleInput = (i) => {
    let temp = [...data];
    temp.splice(i + 1, 0, " ");
    setdata(temp);
  };

  const handlesInput = (i) => {
    let temp = [...data];
    temp.unshift(" ");
    setdata(temp);
  };

  const handlechange = (e, i) => {
    let temp = [...data];
    temp[i] = e.target.value;
    setdata(temp);
  };

  const handleDel = (i) => {
    let temp = [...data];
    temp.splice(i, 1);
    setdata(temp);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "300px",
          height: "400px",
          alignItems: "center",
        }}
      >
         <span
                onClick={() => handlesInput()}
                style={{ cursor: "pointer" }}
              >
                &nbsp;
              </span>
        {data.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ border: "1px solid black" }}>
                <input
                  className="Inputstyle"
                  onChange={(e) => handlechange(e, i)}
                  type="text"
                  value={item}
                />
                <span className="xx" onClick={() => handleDel(i)}>
                  x
                </span>
              </div>
              <span
                onClick={() => handleInput(i)}
                style={{ cursor: "pointer" }}
              >
                &nbsp;
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
