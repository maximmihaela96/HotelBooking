import React, { useState } from "react";

function LoginForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Do whatever we want with the input
    await fetch("http://localhost:7000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email }),
    });

    // Bubbla upp eventet till parent-komponenten
    props.onSubmitUser();

    // Clear values
    setName("");
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={handleNameChange}
          />
          <input
            type="text"
            onChange={handleEmailChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;