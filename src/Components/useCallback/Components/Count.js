import React from "react";

const Count = ({ count, text }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {count}-- {text}
    </div>
  );
};

export default React.memo(Count);
