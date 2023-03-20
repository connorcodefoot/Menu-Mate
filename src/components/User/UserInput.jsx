import React from "react";
import 'components/User/UserInput.scss';


function UserInput() {

  return (
    <>
    <main class="main">
      <h1 class="welcome"> WELCOME TO </h1>
      <h1 class="restaurant"> *RESTAURANT* </h1>
      <section>
        <div class="input-field">
          <form action="/menu">
            <div>
              <input type="text" class="form-control" name="name" placeholder="Name" required="required"/>
            </div>

            <div>
              <input type="text" class="form-control" name="table" placeholder="Table Number" required="required"/>
            </div>

            <div>
              <input type="tel" class="form-control" name="phone" placeholder="Phone Number" required="required"/>
            </div>

            <div>
              <input type="submit" class="btn btn-primary btn-block btn-lg" value="Continue to Menu"/>
            </div>
          </form>
        </div>
      </section>
      </main>
    </>
  );
}

export default UserInput;

