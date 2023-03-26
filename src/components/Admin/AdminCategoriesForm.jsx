import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { Context, useContext } from '../../Context/index';

import 'components/User/UserMenu.scss';

export default function AdminCategoriesForm(props) {
  const [title, setTitle] = useState(props.title || "");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const reset = () => {
    setTitle("");
  }

  const cancel = () => {
    reset();
    navigate('/admin/categories')
  }

  const validate = () => {
    if (!title) {
      setError("Category name cannot be blank");
      return;
    }

    setError("");
    props.onSave(title);
  }

  return(
    <main className="user-menu-item">
      <section className="item__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <label>
            Title:
            <input
              className="item__create-input text--semi-bold"
              name="name"
              type="text"
              label="Category Title:"
              placeholder="Enter Category Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              data-testid="item-name-input"
            />
          </label>
        </form>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}
          >Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
}