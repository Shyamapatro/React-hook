import React from "react";

const Title = () => {
  console.log("redering Title");
  return (
    <div>
      <b>Use CallBack Hook</b>
    </div>
  );
};

export default React.memo(Title);
