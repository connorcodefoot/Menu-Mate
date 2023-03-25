import React from "react";

import Show from "./Show";

export default function AdminMenuItem(props) {

  return (
    <article className="item">
      <Show menuID={props.menuID}/>
    </article>
  );
}
