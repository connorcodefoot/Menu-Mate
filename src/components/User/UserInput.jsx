import React, { useState, useEffect } from "react";
import 'components/User/UserInput.scss';
import MMLogo from '../../MMLogo.gif';
import UserMenuView from "pages/UserMenuView";

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

  const handleSubmit = () => {
    return <UserMenuView />
  };

  useEffect(() => {
    // Add the home-background class to the body element (this is being used for background color on home page without affecting other pages)
    document.body.classList.add("home-background");

    // Remove the home-background class when component unmounts
    return () => {
      document.body.classList.remove("home-background");
    };
  }, []);

  return (
    <>
      <main class="main">
        <img src={MMLogo} alt="MM Logo" class="logo"/>
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
                  type="text"
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
                  onClick={{handleSubmit}}
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


