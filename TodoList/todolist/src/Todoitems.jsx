import React from "react";

export default function Todoitems({ items, deleteFun, togglehandle }) {
  console.log(items);

  return (
    <div>
      {items.map((el, i) => {
        return (
          <div style={{}}>
            <h4>{el.title}</h4>
            <h5>{el.status ? "Completed" : "Not Completed"}</h5>
            <button
              onClick={() => {
                togglehandle(i);
              }}>
              Toggle
            </button>
            <button
              onClick={() => {
                deleteFun(i);
              }}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
