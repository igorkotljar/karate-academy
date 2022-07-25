import React from "react";

function ContaftForm() {
  return (
    <div className="wrapper">
      <div className="formBox">
        <div>
          <h2>Contact us</h2>
        </div>
        <div>
          <form>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your nickname"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your email"
            ></input>
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              className="message"
            ></input>
            <input type="submit" className="gradient-button gradient-button-4"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContaftForm;
