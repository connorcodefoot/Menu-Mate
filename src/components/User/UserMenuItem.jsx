import React from "react";

export default function UserMenuItem(props) {

  return (  
  <>
  <div>
    <h1>{props.title}</h1>
    <h2>{props.details}</h2>
    <h3>{props.price / 100}</h3>
  </div>
  </>
  )
}