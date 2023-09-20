import React, { useState, useEffect } from "react";
import "./Watchlist.css";

function WatchlistOption(props) {
  const { stockdata } = props;
  const [updatedStockData, setUpdatedStockData] = useState(stockdata);
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    setUpdatedStockData(stockdata);
  }, [stockdata]);

  const handleDragStart = (e, item, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDraggedItem({ item, index });
  };

  const handleDragOver = (e, targetIndex) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    if (draggedItem === null) return;

    const updatedList = [...updatedStockData]; 
    
    const droppedIndex = parseInt(e.dataTransfer.getData("text/plain"));

 
    const temp = updatedList[targetIndex];
    updatedList[targetIndex] = updatedList[droppedIndex];
    updatedList[droppedIndex] = temp;

    setUpdatedStockData(updatedList);
    setDraggedItem(null);
  };

  return (
    <div className="watchlist-container">
      {updatedStockData.map((stock, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, stock, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          className="stock-item"
        >
          <div className="Stock_Data">
            <div className="Stock_name">{stock.Stock_name}</div>
            <span className="Stock_category">{stock.Stock_category}</span>
          </div>
          <div className="Stock_value">{stock.Stock_value}</div>
        </div>
      ))}
    </div>
  );
}

export default WatchlistOption;