import React from "react";
const formDiv = {
  gridArea: "content",
  minHeight: "80vh",
  minWidth: "80%",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "1rem",
  width: "50%",
  height: "100%",
};
function SignUp() {
  return (
    <div style={formDiv}>
      <form style={formStyle}>
        <h1>Become an Explorer 🛸 </h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email" type="email">
          {" "}
          Email
        </label>
        <input type="email" id="email" />
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default SignUp;
