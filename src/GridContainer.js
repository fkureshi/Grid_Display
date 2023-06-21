import React from "react";
import "./styles.css";

const GridContainer = ({ itemCount }) => {
  const generateGridTemplateColumns = (count) => {
    return `repeat(3, 1fr)`;
  };

  const generateGridTemplateRows = (count) => {
    const rows = Math.ceil(count / 3);
    return `repeat(${rows}, 1fr)`;
  };

  const generateItemStyles = (index, count) => {
    let columnStart, columnEnd;
    if (count === 1) {
      columnStart = 2;
      columnEnd = 3;
    } else if (count === 2) {
      if (index === 1) {
        columnStart = 1;
        columnEnd = 2;
      } else if (index === 2) {
        columnStart = 3;
        columnEnd = 4;
      }
    } else if (count === 3) {
      if (index === 1) {
        columnStart = 1;
        columnEnd = 2;
      } else if (index === 2) {
        columnStart = 2;
        columnEnd = 3;
      } else if (index === 3) {
        columnStart = 3;
        columnEnd = 4;
      }
    } else if (count === 4) {
      if (index === 1 || index === 3) {
        columnStart = 1;
        columnEnd = 2;
      } else if (index === 2 || index === 4) {
        columnStart = 3;
        columnEnd = 4;
      }
    } else if (count === 5) {
      if (index === 1 || index === 4) {
        columnStart = 1;
        columnEnd = 2;
      } else if (index === 3 || index === 5) {
        columnStart = 3;
        columnEnd = 4;
      }
    } else {
      const rowIndex = Math.ceil((index - 3) / 3) + 1;
      columnStart = index - (rowIndex - 1) * 3 || 3;
      columnEnd = columnStart + 1;
    }

    return {
      gridColumnStart: columnStart,
      gridColumnEnd: columnEnd,
      backgroundColor: "black",
      height: "122px"
    };
  };

  const renderItems = (count) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push(<div key={`item${i}`} style={generateItemStyles(i, count)} />);
    }
    return items;
  };

  const containerStyle = {
    backgroundColor: "tomato",
    display: "grid",
    gridTemplateColumns: generateGridTemplateColumns(itemCount),
    gridTemplateRows: generateGridTemplateRows(itemCount),
    rowGap: "10px",
    columnGap: "10px"
  };

  return (
    <div className="container" style={containerStyle}>
      {renderItems(itemCount)}
    </div>
  );
};

export default GridContainer;
