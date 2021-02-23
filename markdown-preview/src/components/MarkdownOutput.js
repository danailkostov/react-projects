import React from "react";
import { useGlobalContext } from "../utils/context";
import ReactMarkdown from "react-markdown";

const MarkdownOutput = () => {
  const { input } = useGlobalContext();
  return (
    <div>
      <ReactMarkdown>{input}</ReactMarkdown>
    </div>
  );
};

export default MarkdownOutput;
