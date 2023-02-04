import React from "react";
import Image from "./Image";
import Title from "./Title";
import Author from "./Author";

export default function Book(props) {
  return (
    <article className="book">
      <Image src={props.src} />
      <Title title={props.title} />
      <Author author={props.author} />
    </article>
  );
}
