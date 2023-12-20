import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  //Hook && State
  const [inputList, setInputList] = useState(
    ""
  );
  const [items, setItems] = useState([]);
  //onChange input Define
  const prevItem = (event) => {
    setInputList(event.target.value);
  };

  //store data btn array
  const listItem = (event) => {
    try {
      if (inputList === "") {
        alert("Please enter a task");
        return;
      }
      // Add item to the list
      setItems([...items, inputList]);
      setInputList("");
    } catch (error) {
      console.error(error);
    }
  };
  const deletItems = (val) => {
    setItems((oldItems) => {
      return oldItems.filter((item) => {
        return item !== val;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To do list</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            onChange={prevItem}
            value={inputList}
          />
          <button onClick={listItem}>+</button>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <Todolist
                  text={itemVal}
                  key={index}
                  onSelect={() =>
                    deletItems(itemVal)
                  }
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
