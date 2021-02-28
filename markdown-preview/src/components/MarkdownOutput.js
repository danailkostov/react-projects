import React from "react";
import { useGlobalContext } from "../utils/context";
import ReactMarkdown from "react-markdown";

const MarkdownOutput = () => {
  const { input } = useGlobalContext();
  return (
    <article>
      <ReactMarkdown>{input}</ReactMarkdown>
    </article>
  );
};

export default MarkdownOutput;
