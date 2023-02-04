import React from "react";

export default function Author(props) {
  return (
    <h4 style={{ color: "#617d98", fontSize: ".75rem", marginTop: ".25rem" }}>
      {props.author}
    </h4>
  );
}
