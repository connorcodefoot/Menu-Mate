import React from "react";

import Show from "./Show";
import Form from "./Form";
import Error from "./Error";

import useVisualMode from "../../../hooks/useVisualMode";

export default function AdminMenuItem(props) {
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.title ? SHOW : SHOW
  );

  function saveItem(title, details, price, active) {
    const item = {
      title: title,
      details: details,
      price: price,
      active: active
    };

    transition(SAVING);
    props
      .saveItem(props.id)
      .then((resolved) => {
        console.log("resolve", resolved);
        transition(SHOW);
      })
      .catch(error => transition(ERROR_SAVE, true));
  }

  function deleteItem(event) {
    transition(DELETING, true);
    props
      .deleteItem(props.id)
      .then((resolved) => {
        console.log("resolved", resolved);
      })
      .catch(error => transition(ERROR_DELETE, true));
  }

  return (
    <article className="item">
      {mode === SHOW && (
        <Show
          menuID={props.menuID}
          title={props.title}
          details={props.details}
          price={props.price}
          active={props.active}
          onEdit={() => {
            transition(EDIT)
            console.log("clicked")
          }}
        />
      )}
      {mode === CREATE && <Form onCancel={() => back()} onSave={saveItem} />}
      {mode === EDIT && <Form onCancel={() => back()} onSave={saveItem}/>}
      {mode === ERROR_SAVE && <Error message="Could not save appointment." onClose={() => back()} />}
      {mode === ERROR_DELETE && <Error message="Could not cancel appointment." onClose={() => back()} />}
    </article>
  );
}
