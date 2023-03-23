import React, { useState } from "react";

import Button from "../../Button";

export default function Form(props) {
  const [title, setTitle] = useState(props.title || "");
  const [details, setDetails] = useState(props.details || "");
  const [price, setPrice] = useState(props.price || "");
  const [picture, setPicture] = useState(props.picture || "");
  const [active, setActive] = useState(props.active || false);
  const [error, setError] = useState("");

  const reset = () => {
    setTitle("");
    setDetails("");
    setPrice("");
    setActive(false);
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }

  const validate = () => {
    if (!title) {
      setError("Item name cannot be blank");
      return;
    }

    if (!details) {
      setError("Item description cannot be blank");
      return;
    }

    if (!price) {
      setError("Item price cannot be blank");
      return;
    }

    setError("");
    props.onSave(title, details, price, active);
  }

  return(
    <main className="user-menu-item">
      <section className="item__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <label>
            Name:
            <input
              className="item__create-input text--semi-bold"
              name="name"
              type="text"
              label="Item Name:"
              placeholder="Enter Item Name"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              data-testid="item-name-input"
            />
          </label>
          <br/>
          <label>
            Description:
            <input
              className="item__create-input text--semi-bold"
              name="details"
              type="text"
              placeholder="Enter Item Description"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              data-testid="item-details-input"
            />
          </label>
          <br/>
          <label>
            Price:
            <input
              className="item__create-input text--semi-bold"
              name="price"
              type="text"
              placeholder="Enter Item Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              data-testid="item-name-input"
            />
          </label>
          <label>
            Picture:
            <input
              className="item__create-input text--semi-bold"
              name="picture"
              type="text"
              placeholder="Enter Picture URL"
              value={picture}
              onChange={(event) => setPicture(event.target.value)}
              data-testid="item-name-input"
            />
          </label>
        </form>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
}