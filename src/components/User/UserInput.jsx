import React, { useState } from "react";
import 'components/User/UserInput.scss';


function UserInput() {
  const [state, setState] = useState({
    name: "",
    table: "",
    phone: ""
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main class="main">
        <h1 class="welcome"> WELCOME TO </h1>
        <h1 class="restaurant"> *RESTAURANT* </h1>
        <section>
          <div class="input-field">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Name"
                  value={state.name}
                  onChange={handleChange} required
                />
              </div>

              <div>
                <input
                  type="text"
                  class="form-control"
                  name="table"
                  placeholder="Table Number"
                  value={state.table}
                  onChange={handleChange} required
                />
              </div>

              <div>
                <input
                  type="tel"
                  class="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  value={state.phone}
                  onChange={handleChange} required
                />
              </div>

              <div>
                <input
                  type="submit"
                  class="btn btn-primary btn-block btn-lg" 
                  value="Continue to Menu"
                  onClick={() => {
                    window.location.href = '/menu';
                  }}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default UserInput;

