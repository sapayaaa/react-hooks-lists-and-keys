import React from "react";

function ColorList() {
  const color = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = color.map((color) => {
    return <li style={{ color: color }}>{color}</li>;
  });
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/*display the array of <li> elements here!*/}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
