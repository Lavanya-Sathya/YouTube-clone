import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Songs",
    "Gaming",
    "Live",
    "Cricket",
    "Cooking",
    "Sports",
  ];
  return (
    <div className="flex gap-2">
      {list.map((item, idx) => (
        <Button key={idx} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
