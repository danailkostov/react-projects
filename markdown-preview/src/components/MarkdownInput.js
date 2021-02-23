import { TextareaAutosize } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../utils/context";

const MarkdownInput = () => {
  const { input, setInput } = useGlobalContext();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <TextareaAutosize
      rowsMin="50"
      style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.6",
        maxHeight: "800px",
      }}
      onChange={(e) => handleChange(e)}
      value={input}
    />
  );
};

export default MarkdownInput;
