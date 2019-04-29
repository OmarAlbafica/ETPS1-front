import React from 'react'
import { Link } from "react-router-dom";

export default function Button(props) {
  const { type, url, action, text, color } = props;

  if (type === "link") {
    return (
      <Link to={url} class={`waves-effect ${color} waves-light btn`}>{text}</Link>
    )
  }
  return (
    <div
      class={`waves-effect ${color} waves-light btn`}
      onClick={action}
    >
      {text}
    </div>
  )
}
