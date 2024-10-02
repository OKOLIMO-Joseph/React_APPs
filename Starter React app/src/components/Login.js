import React from 'react';
import "./components/DropDown.css";

export default function Login() {
  return (
    <div>
      <h2>Taste-Pal RESTAURANT</h2>
      <div id="main">
        <h2>Login</h2>
        <section>
          <form>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" /> {/* Added id attribute */}
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" /> <br /><br />   
            <button id="login" type="submit">Login</button> {/* Added type="submit" */}
          </form>
        </section>
      </div>
    </div>
  );
}
