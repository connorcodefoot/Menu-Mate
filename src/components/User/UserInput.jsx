import React, { useState, useEffect } from "react";
import 'components/User/UserInput.scss';
import MMLogo from '../../MMLogo.gif';
import { useContext, UserContext } from '../../Context/index';
import UserMenuView from "pages/UserMenuView";
import { useNavigate } from "react-router-dom";


function UserInput() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
      orderID: 0
    });
    console.log('input', user)
  };

  const handleSubmit = (event) => {
      event.preventDefault()
      navigate('/user/menu')

    }

  useEffect(() => {
    // Add the home-background class to the body element (this is being used for background color on home page without affecting other pages)
    document.body.classList.add("home-background");

    // Remove the home-background class when component unmounts
    return () => {
      document.body.classList.remove("home-background");
    };
  }, []);

  console.log('input start', user)
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
                  onChange={handleChange} required
                  className="name-field"
                />
              </div>

              <div>
                <input
                  type="text"
                  class="form-control"
                  name="table"
                  placeholder="Table Number"
                  onChange={handleChange} required
                  className="table-field"
                />
              </div>

              <div>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange} required
                  className="ph-field"
                />
              </div>

              <div>
                <button          
                  type="submit"
                  class="btn btn-primary btn-block btn-lg"
                  className="menu-btn"
                >
                Go to menu
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default UserInput;


